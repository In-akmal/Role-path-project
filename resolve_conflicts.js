const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (file === '.git' || file === 'node_modules') return;
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walk('.');

files.forEach(file => {
    if (!file.endsWith('.js') && !file.endsWith('.html') && !file.endsWith('.css')) return;
    
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('<<<<<<< HEAD')) {
        console.log('Resolving conflicts in ' + file);
        
        // Regex to match conflict blocks
        // Keep the HEAD block (Group 1) and discard the other block (Group 2)
        const regex = /<<<<<<< HEAD\r?\n([\s\S]*?)=======\r?\n([\s\S]*?)>>>>>>> [a-f0-9]+\r?\n/g;
        
        const newContent = content.replace(regex, '$1');
        
        if (newContent !== content) {
            fs.writeFileSync(file, newContent, 'utf8');
            console.log('  -> Fixed ' + file);
        }
    }
});
