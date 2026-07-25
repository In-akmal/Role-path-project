const fs = require('fs');
const path = require('path');

const roadmapDir = path.join(__dirname, 'data', 'roadmaps');
const files = fs.readdirSync(roadmapDir).filter(f => f.endsWith('.json'));

let totalErrors = 0;

files.forEach(file => {
    const filePath = path.join(roadmapDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const errors = [];

    // Check Metadata
    if (!data.metadata || !data.metadata.title) errors.push('Missing metadata.title');
    if (!data.metadata.duration) errors.push('Missing metadata.duration');

    const allLessonIds = new Set();
    
    // Check Modules
    if (!data.modules || data.modules.length === 0) {
        errors.push('No modules found');
    } else {
        data.modules.forEach(mod => {
            if (!mod.id) errors.push(`Module missing id: ${mod.title}`);
            if (!mod.title) errors.push(`Module missing title: ${mod.id}`);
            
            if (mod.lessons) {
                mod.lessons.forEach(l => {
                    if (!l.id) errors.push(`Lesson missing id: ${l.title}`);
                    else {
                        if (allLessonIds.has(l.id)) errors.push(`Duplicate lesson id: ${l.id}`);
                        allLessonIds.add(l.id);
                    }
                    if (!l.title) errors.push(`Lesson missing title: ${l.id}`);
                    if (!l.duration) errors.push(`Lesson missing duration: ${l.id}`);
                    if (!l.state) errors.push(`Lesson missing state: ${l.id}`);
                    if (!l.resources) errors.push(`Lesson missing resources array: ${l.id}`);
                });
            } else {
                errors.push(`Module missing lessons array: ${mod.id}`);
            }
        });
        
        // Check Prerequisites (they must exist in the set of all lessons)
        data.modules.forEach(mod => {
            if (mod.lessons) {
                mod.lessons.forEach(l => {
                    if (l.prerequisite && !allLessonIds.has(l.prerequisite)) {
                        errors.push(`Invalid prerequisite '${l.prerequisite}' for lesson ${l.id}`);
                    }
                });
            }
        });
    }

    if (errors.length > 0) {
        console.log(`\n❌ ${file} - ${errors.length} errors found:`);
        errors.forEach(e => console.log(`   - ${e}`));
        totalErrors += errors.length;
    } else {
        console.log(`✅ ${file} is valid.`);
    }
});

if (totalErrors > 0) {
    console.error(`\nValidation failed with ${totalErrors} errors total.`);
    process.exit(1);
} else {
    console.log(`\n🎉 All ${files.length} roadmaps passed validation!`);
}
