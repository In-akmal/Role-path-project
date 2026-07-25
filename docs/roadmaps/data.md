# Data Career Roadmaps

This document provides comprehensive, detailed roadmaps for various data-related roles and technologies. Each section includes an overview, estimated duration, learning modules with specific topics, practical projects, interview preparation guidelines, tools, and required skills.

---

## 1. Data Analytics

### Overview
Data Analytics involves analyzing raw data to find trends and answer questions. Data Analysts use statistical tools to interpret data sets, paying particular attention to trends and patterns that could be valuable for diagnostic and predictive analytics efforts.

### Duration
- **Intensive/Full-time:** 3 - 4 Months
- **Part-time:** 6 - 8 Months

### Modules & Topics

#### Module 1: Foundational Mathematics & Statistics
- **Descriptive Statistics:** Mean, median, mode, variance, standard deviation, percentiles, skewness.
- **Inferential Statistics:** Hypothesis testing (A/B testing), p-values, confidence intervals.
- **Probability:** Basic probability rules, normal distribution, binomial distribution.
- **Data Distributions:** Understanding data shapes and identifying outliers.

#### Module 2: Spreadsheets (Excel/Google Sheets)
- **Data Cleaning:** Text functions (LEFT, RIGHT, MID, CONCATENATE), removing duplicates, data validation.
- **Formulas & Functions:** VLOOKUP, HLOOKUP, XLOOKUP, INDEX/MATCH, nested IF statements, COUNTIFS, SUMIFS.
- **Pivot Tables:** Summarizing data, calculated fields, slicers, timelines.
- **Data Visualization:** Line charts, bar charts, scatter plots, combo charts, conditional formatting.

#### Module 3: Relational Databases & SQL
- **Basic Queries:** SELECT, FROM, WHERE, ORDER BY, LIMIT.
- **Aggregations:** GROUP BY, HAVING, SUM, AVG, COUNT, MIN, MAX.
- **Joins:** INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN.
- **Advanced Functions:** Subqueries, CTEs (Common Table Expressions), Window functions (ROW_NUMBER, RANK, DENSE_RANK), CASE statements.

#### Module 4: Business Intelligence (BI) Tools
- **Connecting Data Sources:** Importing data from SQL, Excel, and web sources.
- **Data Modeling:** Creating relationships between tables, star schema vs. snowflake schema.
- **Dashboarding:** Building interactive dashboards, applying filters, using appropriate visual types.
- **DAX/Calculations:** Creating measures and calculated columns.

#### Module 5: Programming Basics (Python or R)
- **Data Structures:** Lists, dictionaries, tuples.
- **Data Manipulation (Pandas/dplyr):** Reading CSV/Excel, filtering, grouping, merging, handling missing values.
- **Data Visualization (Matplotlib/Seaborn/ggplot2):** Creating programmatic plots and exploratory data analysis (EDA).

### Projects
1. **Sales Performance Dashboard:** Analyze a retail dataset using Excel and Tableau to identify top-performing regions, seasonal trends, and product category profitability.
2. **Customer Churn Analysis:** Use SQL to extract data from a customer database, identifying churn rates across different demographics and subscription tiers.
3. **A/B Testing Evaluation:** Use Python to analyze the results of a website UI change, applying statistical hypothesis testing to determine if the change significantly improved conversion rates.

### Interview Prep
- **Behavioral:** "Tell me about a time you found an unexpected insight in data," "How do you handle incomplete data?"
- **Technical SQL:** Be prepared to write queries involving multiple JOINs, CTEs, and Window functions on a whiteboard or virtual IDE.
- **Analytical Case Study:** Given a business problem (e.g., "Why are sales down 10% this month?"), walk through your approach to diagnosing the issue using data.

### Tools
- Microsoft Excel, Google Sheets
- PostgreSQL, MySQL, SQL Server
- Tableau, Power BI, Looker
- Python (Jupyter Notebooks, Pandas)

### Skills
- Statistical Analysis
- Data Cleaning and Wrangling
- Dashboard Creation
- Storytelling with Data
- Business Acumen

---

## 2. Data Science

### Overview
Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines domain expertise, programming skills, and knowledge of mathematics and statistics.

### Duration
- **Intensive/Full-time:** 6 - 8 Months
- **Part-time:** 9 - 12 Months

### Modules & Topics

#### Module 1: Advanced Mathematics & Statistics
- **Linear Algebra:** Vectors, matrices, eigenvalues, eigenvectors, matrix multiplication (essential for understanding algorithms).
- **Calculus:** Derivatives, partial derivatives, gradient descent.
- **Advanced Statistics:** Bayesian statistics, advanced probability distributions, ANOVA, time series analysis fundamentals.

#### Module 2: Programming for Data Science
- **Python Fundamentals:** Object-oriented programming, functions, error handling.
- **Data Wrangling:** Advanced Pandas, handling large datasets, text manipulation (Regex).
- **Web Scraping:** BeautifulSoup, Scrapy, interacting with APIs.
- **Version Control:** Git, GitHub workflows.

#### Module 3: Exploratory Data Analysis (EDA) & Feature Engineering
- **EDA Techniques:** Univariate and bivariate analysis, correlation matrices, identifying multicollinearity.
- **Imputation:** Advanced techniques for handling missing data (KNN imputation, Mean/Median imputation).
- **Feature Scaling:** Normalization, standardization.
- **Encoding:** One-hot encoding, label encoding, target encoding.
- **Dimensionality Reduction:** PCA (Principal Component Analysis), t-SNE.

#### Module 4: Machine Learning Fundamentals
- **Supervised Learning (Regression):** Linear regression, Ridge, Lasso, Polynomial regression.
- **Supervised Learning (Classification):** Logistic regression, Decision Trees, Random Forests, Support Vector Machines (SVM), k-Nearest Neighbors (k-NN).
- **Unsupervised Learning:** K-Means clustering, Hierarchical clustering, DBSCAN.
- **Model Evaluation:** Train/test split, cross-validation, confusion matrix, precision, recall, F1-score, ROC-AUC curve, RMSE, MAE.

#### Module 5: Model Deployment & MLOps Basics
- **Creating APIs:** Flask, FastAPI.
- **Containerization:** Docker basics (creating Dockerfiles, running containers).
- **Cloud Basics:** Deploying models on AWS, GCP, or Heroku.

### Projects
1. **House Price Prediction System:** End-to-end regression project including EDA, feature engineering, testing multiple models (Random Forest, XGBoost), and deploying via a simple Flask API.
2. **Customer Segmentation:** Apply K-Means clustering on e-commerce transaction data to identify distinct customer personas for targeted marketing.
3. **Sentiment Analysis on Product Reviews:** Scrape reviews from a website, process the text data, and build a classification model to categorize sentiments as positive, neutral, or negative.

### Interview Prep
- **Math/Stats Questions:** Explain p-value to a non-technical person; explain the assumptions of linear regression.
- **Coding:** Python data manipulation tasks, algorithms, and data structure problems (Leetcoding).
- **Machine Learning Theory:** Explain how a Random Forest works vs. a Gradient Boosting Machine; how do you handle imbalanced datasets?
- **Take-home Assignments:** Typically involves a dataset where you must perform EDA, build a model, and document your findings.

### Tools
- Python, R
- Scikit-learn, XGBoost, LightGBM
- Jupyter, Spyder, VS Code
- Git, Docker, Flask/FastAPI

### Skills
- Machine Learning Modeling
- Statistical Modeling
- Programming & Software Engineering Principles
- Data Storytelling and Presentation
- Experimental Design

---

## 3. Data Engineering

### Overview
Data Engineering focuses on the practical application of data collection and analysis. Data engineers build systems that collect, manage, and convert raw data into usable information for data scientists and business analysts to interpret.

### Duration
- **Intensive/Full-time:** 6 - 8 Months
- **Part-time:** 9 - 14 Months

### Modules & Topics

#### Module 1: Programming & Linux Fundamentals
- **Advanced Python/Scala/Java:** Object-oriented design, functional programming, concurrency/multithreading.
- **Linux Command Line:** File manipulation, grep, awk, bash scripting, SSH, cron jobs.
- **Version Control & CI/CD:** Advanced Git, GitHub Actions, Jenkins basics.

#### Module 2: Advanced SQL & Data Modeling
- **Relational Databases:** Tuning queries, indexing strategies, execution plans, ACID properties.
- **Data Warehousing Concepts:** OLTP vs. OLAP, Star and Snowflake schemas, Data Vault modeling, Slowly Changing Dimensions (SCD Type 1, 2, 3).
- **Cloud Data Warehouses:** Snowflake, Amazon Redshift, or Google BigQuery architecture and optimization.

#### Module 3: Big Data Processing & Distributed Systems
- **Hadoop Ecosystem (Legacy/Conceptual):** HDFS, MapReduce.
- **Apache Spark:** RDDs, DataFrames, Spark SQL, transformations vs. actions, optimizing Spark jobs (partitioning, broadcasting).
- **NoSQL Databases:** Document stores (MongoDB), Column-family (Cassandra), Key-Value (Redis).

#### Module 4: Data Pipelines & Orchestration (ETL/ELT)
- **Batch Processing:** Designing reliable ETL/ELT workflows.
- **Orchestration Tools:** Apache Airflow (DAGs, operators, scheduling), Prefect, Dagster.
- **Modern Data Stack tools:** dbt (data build tool) for transformations, Fivetran/Airbyte for ingestion.

#### Module 5: Real-time Data Streaming
- **Message Brokers:** Apache Kafka (Topics, Producers, Consumers, Partitions).
- **Stream Processing:** Spark Streaming, Apache Flink, KSQL.

#### Module 6: Cloud Infrastructure & Infrastructure as Code
- **Cloud Platforms (AWS/GCP/Azure):** S3/GCS, IAM, EC2/Compute Engine, EMR/Dataproc.
- **Infrastructure as Code (IaC):** Terraform basics for provisioning data infrastructure.

### Projects
1. **End-to-End Batch Data Pipeline:** Scrape real estate data from an API, store raw data in AWS S3, use Apache Airflow to trigger a Spark job that cleans the data, and load the processed data into Amazon Redshift.
2. **Analytics Engineering with dbt:** Take raw e-commerce data in Snowflake, build a complete dbt project with staging, intermediate, and mart models, implementing testing and documentation.
3. **Real-time Log Processing:** Set up a Kafka cluster to ingest fake web server logs, process them in real-time using Spark Streaming to count errors per minute, and write results to a PostgreSQL database.

### Interview Prep
- **Data Modeling Scenarios:** "Design a database schema for a ride-sharing app like Uber."
- **SQL Assessments:** Complex queries, window functions, and query optimization questions.
- **System Design:** "How would you build a pipeline to ingest 1TB of data daily from various APIs, transform it, and serve it for reporting within a 1-hour SLA?"
- **Programming:** Algorithmic challenges and data transformation tasks in Python or Scala.

### Tools
- Python, Scala, SQL, Bash
- Apache Spark, Apache Kafka, Apache Airflow
- Snowflake, Redshift, BigQuery
- dbt, Docker, Kubernetes, Terraform

### Skills
- Distributed Computing
- Database Architecture and Design
- ETL/ELT Pipeline Development
- Cloud Architecture
- Performance Tuning

---

## 4. Machine Learning (ML)

### Overview
Machine Learning engineering bridges the gap between data science and software engineering. While data scientists focus on model creation and statistical validity, ML Engineers focus on deploying, scaling, and maintaining these models in production environments.

### Duration
- **Intensive/Full-time:** 5 - 7 Months (assuming prior programming/data knowledge)
- **Part-time:** 8 - 12 Months

### Modules & Topics

#### Module 1: ML Algorithms & Theory Deep Dive
- **Ensemble Methods:** Bagging (Random Forest), Boosting (AdaBoost, Gradient Boosting, XGBoost, LightGBM, CatBoost).
- **Optimization Algorithms:** Gradient descent variants (SGD, Adam, RMSprop), learning rate schedules.
- **Hyperparameter Tuning:** Grid search, Random search, Bayesian optimization (Optuna).
- **Loss Functions:** Cross-entropy, MSE, Huber loss, Hinge loss.

#### Module 2: Software Engineering for ML
- **Design Patterns:** Object-oriented programming patterns for ML pipelines.
- **Testing:** Unit testing (pytest), integration testing, testing ML models (metamorphic testing).
- **Code Quality:** PEP8, linting (flake8, pylint), formatting (Black), type hinting.

#### Module 3: MLOps & Model Deployment
- **Model Tracking:** MLflow, Weights & Biases (tracking experiments, parameters, and metrics).
- **Model Registry & Versioning:** DVC (Data Version Control), MLflow Model Registry.
- **Serving Models:** RESTful APIs (FastAPI), gRPC, TF Serving, TorchServe.
- **Containerization & Orchestration:** Advanced Docker, Kubernetes basics for scaling models.

#### Module 4: Cloud ML Platforms
- **AWS:** SageMaker (Training, Endpoints, Pipelines).
- **GCP:** Vertex AI.
- **Azure:** Azure Machine Learning.

#### Module 5: System Monitoring & Maintenance
- **Concept & Data Drift:** Detecting when a model's performance degrades due to changing real-world data.
- **Monitoring Tools:** Prometheus, Grafana, evidently.ai.
- **Retraining Strategies:** Automated retraining pipelines.

### Projects
1. **Scalable Credit Scoring API:** Train a highly optimized XGBoost model for credit risk, track experiments with MLflow, containerize the model with FastAPI and Docker, and write tests for API endpoints.
2. **Automated ML Pipeline on AWS:** Use AWS SageMaker to build an automated pipeline that ingests data, trains a model, evaluates it against a threshold, and registers it if it passes.
3. **Drift Detection System:** Deploy a classification model and simulate incoming data that slowly changes over time. Implement Evidently.ai to trigger an alert when data drift crosses a specific threshold.

### Interview Prep
- **ML System Design:** "Design a recommendation system for a streaming service and explain how you will serve it in real-time."
- **Algorithmic Complexity:** Understanding Big O notation for training and inference times of various algorithms.
- **Debugging Models:** "Your deployed model's accuracy dropped by 15% overnight. How do you troubleshoot this?"
- **Software Engineering:** Leetcode-style programming questions (medium to hard).

### Tools
- Python, C++ (optional for optimization)
- XGBoost, Scikit-learn
- Docker, Kubernetes, FastAPI, MLflow
- AWS SageMaker, GCP Vertex AI

### Skills
- Software Engineering Best Practices
- CI/CD for Machine Learning
- Model Deployment and Serving
- Scalability and Performance Optimization
- System Monitoring

---

## 5. Deep Learning

### Overview
Deep Learning is a specialized subset of Machine Learning focused on artificial neural networks. It is primarily used for complex tasks involving unstructured data, such as computer vision, natural language processing, and audio analysis.

### Duration
- **Intensive/Full-time:** 4 - 6 Months (assuming strong ML foundation)
- **Part-time:** 7 - 10 Months

### Modules & Topics

#### Module 1: Neural Network Foundations
- **Perceptrons & Multi-Layer Perceptrons (MLPs):** Architecture, forward propagation.
- **Backpropagation:** The chain rule, computing gradients, updating weights.
- **Activation Functions:** Sigmoid, Tanh, ReLU, Leaky ReLU, Softmax.
- **Regularization:** Dropout, L1/L2 regularization, early stopping, Batch Normalization.

#### Module 2: Deep Learning Frameworks
- **PyTorch (Preferred for Research/Modern Prod):** Tensors, Autograd, building `nn.Module` classes, DataLoaders.
- **TensorFlow / Keras (Legacy/Enterprise):** Sequential vs. Functional API, TF Datasets, TensorBoard.

#### Module 3: Computer Vision (CV)
- **Convolutional Neural Networks (CNNs):** Convolutions, pooling layers, receptive fields, channels.
- **Modern Architectures:** ResNet, VGG, Inception, EfficientNet.
- **Advanced CV Tasks:** Object Detection (YOLO, Faster R-CNN), Image Segmentation (U-Net, Mask R-CNN).
- **Transfer Learning:** Fine-tuning pre-trained models.

#### Module 4: Natural Language Processing (NLP) & Sequences
- **Text Representation:** Bag of Words, TF-IDF, Word Embeddings (Word2Vec, GloVe).
- **Recurrent Neural Networks (RNNs):** LSTMs, GRUs, handling sequence data, backpropagation through time (BPTT).
- **Attention Mechanism & Transformers (Foundations):** Self-attention, the original Transformer architecture.

#### Module 5: Generative Models (Pre-LLM Era)
- **Autoencoders:** Latent space representation, Variational Autoencoders (VAEs).
- **GANs (Generative Adversarial Networks):** Generator and Discriminator training dynamics, DCGAN.

### Projects
1. **Custom Image Classifier with Transfer Learning:** Build a PyTorch model using a pre-trained ResNet to classify a complex dataset (e.g., medical images or specific plant diseases), implementing data augmentation and fine-tuning.
2. **Real-time Object Detection:** Train a YOLO model to detect specific objects (e.g., license plates or specific retail products) and run inference on a video stream using OpenCV.
3. **Neural Machine Translation:** Build a sequence-to-sequence model using LSTMs with an attention mechanism to translate short sentences from English to French.

### Interview Prep
- **Math Deep Dive:** Be able to derive backpropagation for a simple neural network on a whiteboard.
- **Architecture Explanations:** Explain how a CNN learns spatial hierarchies or the vanishing gradient problem in vanilla RNNs.
- **Framework Proficiency:** "Write a PyTorch training loop from scratch."
- **Optimization:** "Your network isn't converging. What steps do you take to diagnose and fix it?" (e.g., checking learning rate, exploding gradients, data normalization).

### Tools
- PyTorch, TensorFlow, Keras
- OpenCV, Hugging Face `transformers` (basics)
- CUDA, cuDNN (GPU acceleration basics)
- Google Colab, AWS EC2 (GPU instances)

### Skills
- Tensor Operations and Math
- Computer Vision Architecture Design
- NLP Fundamentals
- GPU Memory Management
- Model Profiling

---

## 6. Generative AI (GenAI) & LLMs

### Overview
Generative AI focuses on models that can create new content (text, images, code, audio) rather than just predicting or classifying existing data. This track heavily emphasizes Large Language Models (LLMs), prompt engineering, and building AI applications.

### Duration
- **Intensive/Full-time:** 3 - 5 Months (assuming Python and basic ML knowledge)
- **Part-time:** 6 - 8 Months

### Modules & Topics

#### Module 1: Introduction to Generative Models & LLMs
- **Transformer Deep Dive:** Encoder-Decoder, Decoder-only (GPT), Encoder-only (BERT) architectures.
- **Tokenization:** BPE (Byte Pair Encoding), WordPiece, Tiktoken.
- **Understanding LLMs:** Autoregressive generation, temperature, top-p/top-k sampling.

#### Module 2: Prompt Engineering
- **Techniques:** Zero-shot, Few-shot, Chain of Thought (CoT), ReAct prompting, Tree of Thoughts.
- **System Prompts:** Designing robust system instructions for AI personas.
- **Prompt Injection:** Understanding vulnerabilities and mitigation strategies.

#### Module 3: Interacting with AI APIs
- **OpenAI API:** Chat Completions, Embeddings, DALL-E, Whisper.
- **Anthropic Claude API & Google Gemini API.**
- **Open Source Models:** Using Hugging Face Hub, downloading and running GGUF/AWQ models locally via Ollama or vLLM.

#### Module 4: Retrieval-Augmented Generation (RAG)
- **Vector Databases:** Pinecone, ChromaDB, Weaviate, Qdrant, Milvus.
- **Embeddings:** Creating and comparing vector embeddings, cosine similarity.
- **RAG Architecture:** Document chunking strategies (recursive, semantic), indexing, retrieval, and generation.
- **Advanced RAG:** Re-ranking (Cohere), hybrid search (keyword + semantic), query routing.

#### Module 5: Orchestration Frameworks & Agents
- **LangChain & LlamaIndex:** Chains, agents, memory management, document loaders.
- **Building Agents:** Providing LLMs with tools (calculators, web search, SQL execution) to solve complex tasks.

#### Module 6: Fine-Tuning & Evaluation
- **PEFT (Parameter-Efficient Fine-Tuning):** LoRA, QLoRA.
- **Instruction Tuning:** Preparing instruction-response datasets.
- **Evaluation:** RAGAS (RAG Assessment), evaluating LLM outputs (BLEU/ROUGE vs. LLM-as-a-judge).

### Projects
1. **Corporate Knowledge Base Q&A Bot:** Build a RAG system using LangChain, ChromaDB, and OpenAI to chat with a company's internal PDF documents and policies, deployed via a Streamlit interface.
2. **Autonomous Web Research Agent:** Create an agent using LlamaIndex that takes a topic, searches the web, reads top articles, and compiles a comprehensive summary report with citations.
3. **Fine-Tuned Specialized Assistant:** Fine-tune a small open-source model (e.g., Llama 3 8B) using QLoRA on a custom dataset of medical Q&A to create a specialized, locally-running healthcare assistant.

### Interview Prep
- **RAG Fundamentals:** "Explain the steps of RAG and how you would improve retrieval accuracy if the LLM is hallucinating answers."
- **Prompting:** "How do you design a prompt to prevent the model from answering out-of-domain questions?"
- **Cost & Latency Optimization:** "How do you reduce the latency and API costs of a high-traffic LLM application?"
- **Model Nuances:** Discuss the trade-offs between open-source models vs. proprietary APIs (privacy, cost, control).

### Tools
- Python, TypeScript (optional)
- LangChain, LlamaIndex, Haystack
- OpenAI API, Hugging Face, Ollama
- ChromaDB, Pinecone
- Streamlit, Gradio

### Skills
- Prompt Engineering
- Vector Search and RAG Design
- API Integration
- Autonomous Agent Design
- Fine-Tuning Methodologies

---

## 7. SQL (Deep Dive Track)

### Overview
Structured Query Language (SQL) is the standard language for managing and manipulating relational databases. While covered briefly in other tracks, this is a dedicated, deep-dive roadmap for individuals aiming to become SQL experts, Database Administrators (DBAs), or specialized Data Analysts.

### Duration
- **Intensive/Full-time:** 1 - 2 Months
- **Part-time:** 2 - 4 Months

### Modules & Topics

#### Module 1: Advanced Querying
- **Joins Mastery:** Cross joins, self joins, understanding join performance.
- **Window Functions Deep Dive:** NTILE, LEAD, LAG, FIRST_VALUE, LAST_VALUE, running totals, moving averages.
- **Advanced Filtering & Logic:** Complex CASE statements, COALESCE, NULLIF, EXISTS vs. IN.
- **Set Operations:** UNION, UNION ALL, INTERSECT, EXCEPT.

#### Module 2: Data Definition & Manipulation (DDL & DML)
- **Creating/Altering Tables:** Data types, primary keys, foreign keys, constraints (CHECK, UNIQUE).
- **Views & Materialized Views:** Creating views for security and simplicity, materialized views for performance.
- **Transactions:** BEGIN, COMMIT, ROLLBACK, understanding concurrency control and locks.

#### Module 3: Programming in SQL (Stored Procedures & Triggers)
- **Variables and Control Flow:** IF/ELSE logic within SQL scripts, loops (WHILE).
- **Stored Procedures:** Creating modular, parameterized scripts for automated tasks.
- **User-Defined Functions (UDFs):** Scalar and table-valued functions.
- **Triggers:** Automating actions based on INSERT, UPDATE, or DELETE events.

#### Module 4: Performance Tuning & Optimization
- **Indexes:** Clustered vs. Non-clustered indexes, covering indexes, composite indexes, when NOT to index.
- **Execution Plans:** Reading EXPLAIN plans, identifying bottlenecks, understanding table scans vs. index seeks.
- **Query Refactoring:** Avoiding correlated subqueries, optimizing JOIN conditions, Sargability (Search Argument-Able queries).

#### Module 5: Database Administration Basics
- **Security:** Managing users, roles, and permissions (GRANT, REVOKE).
- **Backup and Restore:** Strategies for database backups, point-in-time recovery.

### Projects
1. **E-commerce Data Warehouse Construction:** Build a complex relational schema from scratch with foreign key constraints, populate it with mock data, and write a suite of stored procedures to handle daily "purchases" and inventory updates.
2. **Query Optimization Challenge:** Take a provided set of very slow, poorly written queries on a large dataset (e.g., StackOverflow data dump) and refactor them using indexes and better logic to improve execution time by 90%.
3. **Cohort Analysis Script:** Write a complex SQL script using CTEs and window functions to calculate user retention and churn rates across monthly cohorts, visualizing the result matrix in a BI tool.

### Interview Prep
- **Live Coding:** Solving Leetcode SQL Hard problems (e.g., finding the top 3 salaries in each department, cancelling out consecutive transactions).
- **Optimization:** "You have a query taking 10 minutes. Walk me through exactly how you would find out why and fix it."
- **Schema Design:** Whiteboarding database normalization (1NF, 2NF, 3NF).

### Tools
- PostgreSQL (Recommended for learning advanced features)
- Microsoft SQL Server (T-SQL)
- MySQL
- DBeaver, DataGrip, SSMS

### Skills
- Relational Database Management
- Advanced Query Writing
- Query Optimization and Execution Analysis
- Database Security
- Procedural SQL Programming

---

## 8. Power BI

### Overview
Power BI is Microsoft's premier business analytics service. It provides interactive visualizations and business intelligence capabilities with an interface simple enough for end-users to create their own reports and dashboards.

### Duration
- **Intensive/Full-time:** 1 - 2 Months
- **Part-time:** 2 - 3 Months

### Modules & Topics

#### Module 1: Power Query (Data Transformation)
- **Connecting to Data:** Importing from Excel, SQL databases, Web APIs, SharePoint.
- **Data Shaping:** Merging and appending queries, pivoting/unpivoting columns, splitting columns, grouping data.
- **M Formula Language (Basics):** Understanding the code generated by Power Query, writing custom columns.
- **Data Load Optimization:** Disabling load for staging queries, managing refresh settings.

#### Module 2: Data Modeling
- **Relationships:** Cardinality (1-to-many, many-to-many), cross-filter direction.
- **Star Schema Design:** Identifying Fact and Dimension tables.
- **Date Tables:** Creating dynamic calendar tables for time intelligence.
- **Hierarchies:** Creating drill-down paths (e.g., Year > Quarter > Month).

#### Module 3: DAX (Data Analysis Expressions)
- **Calculated Columns vs. Measures:** Understanding when to use which (Row context vs. Filter context).
- **Basic DAX:** SUM, AVERAGE, MIN, MAX, DIVIDE.
- **Filter Functions:** CALCULATE (the most important function in DAX), FILTER, ALL, ALLEXCEPT.
- **Time Intelligence:** TOTALYTD, SAMEPERIODLASTYEAR, DATEADD.
- **Advanced DAX:** Variables (VAR), ITERATORS (SUMX, AVERAGEX), RANKX.

#### Module 4: Data Visualization & Storytelling
- **Core Visuals:** Bar charts, line charts, matrix, cards, slicers.
- **Formatting:** Conditional formatting, themes, layout design, tooltips.
- **Interactive Features:** Drill-through, bookmarks, buttons, selection pane for dynamic report navigation.
- **Custom Visuals:** Importing and utilizing visuals from the AppSource marketplace.

#### Module 5: Power BI Service (Deployment)
- **Workspaces:** Managing content and permissions.
- **Dashboards vs. Reports:** Creating high-level dashboards from report tiles.
- **Data Gateways:** Setting up scheduled refreshes for on-premises data.
- **Row-Level Security (RLS):** Restricting data access based on the user viewing the report.

### Projects
1. **Financial Performance Report:** Build a multi-page report for a fictional company detailing revenue vs. budget, using DAX for time intelligence (YTD, YoY growth) and implementing bookmark-based navigation.
2. **HR Analytics Dashboard:** Analyze employee turnover, demographics, and satisfaction scores. Implement Row-Level Security so regional managers can only see data for their specific region.
3. **API Data Integration:** Use Power Query to pull live weather or stock market data from a public API, clean it, and build a daily-refreshing dashboard in the Power BI Service.

### Interview Prep
- **DAX Knowledge:** "Explain the difference between a Calculated Column and a Measure." "How does the CALCULATE function manipulate filter context?"
- **Data Modeling:** "Why is a Star Schema preferred over a single flat table in Power BI?"
- **Performance:** "Your Power BI report is very slow to load. What steps do you take to troubleshoot?" (e.g., Performance Analyzer tool, DAX Studio, reducing visual count).
- **Portfolio:** Having a public Power BI portfolio (novyPro or personal website) is highly recommended.

### Tools
- Power BI Desktop
- Power BI Service
- Power Query, DAX
- DAX Studio, Tabular Editor (Advanced)

### Skills
- Data Modeling and Star Schema Design
- DAX Programming
- UI/UX Design for Dashboards
- Report Publishing and Administration

---

## 9. Tableau

### Overview
Tableau is a powerful and fastest-growing data visualization tool used in the Business Intelligence industry. It helps in simplifying raw data into a very easily understandable format (dashboards and worksheets) without requiring programming skills.

### Duration
- **Intensive/Full-time:** 1 - 2 Months
- **Part-time:** 2 - 3 Months

### Modules & Topics

#### Module 1: Tableau Fundamentals
- **Connecting Data:** Live vs. Extract connections, data blending vs. joins/relationships.
- **Tableau Workspace:** Dimensions vs. Measures, Discrete vs. Continuous fields (Blue vs. Green pills).
- **Basic Charts:** Bar charts, line charts, pie charts, text tables, heat maps, tree maps.

#### Module 2: Advanced Visualizations
- **Dual Axis Charts:** Combining different chart types or comparing scales.
- **Geographic Mapping:** Custom territories, spatial files, map layers.
- **Advanced Charts:** Box plots, bullet graphs, Pareto charts, waterfall charts, Gantt charts.

#### Module 3: Calculations & Logic
- **Calculated Fields:** Basic arithmetic, string functions, logical statements (IF/THEN/ELSE, CASE).
- **Table Calculations:** Running total, percent of total, difference from previous, moving average. Understanding compute directions (Table Across, Pane Down).
- **Level of Detail (LOD) Expressions:** FIXED, INCLUDE, EXCLUDE. (Crucial for advanced analysis).
- **Parameters:** Creating dynamic inputs for users to change metrics or dimensions on the fly.

#### Module 4: Dashboard Design & Interactivity
- **Layouts:** Tiled vs. Floating containers, responsive design for different devices.
- **Actions:** Filter actions, highlight actions, URL actions, parameter actions, set actions.
- **Storytelling:** Using Tableau Stories to guide users through a data narrative.
- **Design Best Practices:** Color theory, reducing clutter (data-ink ratio), guiding the user's eye.

#### Module 5: Tableau Server / Tableau Cloud & Prep
- **Publishing:** Uploading workbooks and data sources.
- **Scheduling:** Setting up extract refreshes.
- **Tableau Prep Builder:** Basic ETL capabilities—cleaning, pivoting, and aggregating data before it hits Tableau Desktop.

### Projects
1. **Global Superstore Executive Dashboard:** Use the classic Superstore dataset to create an interactive dashboard showing KPIs, profitability map, and sales forecasting. Implement parameters to allow users to switch the primary metric (Sales, Profit, Quantity).
2. **Healthcare Facility Utilization Story:** Create a Tableau Story highlighting patient admission trends, capacity bottlenecks, and readmission rates, utilizing LOD expressions to calculate patient-level averages across departments.
3. **Marketing Campaign ROI Tracker:** Connect to multiple data sources (e.g., Salesforce and Google Analytics mock data) using relationships, and build a dual-axis chart showing ad spend vs. conversion rate over time.

### Interview Prep
- **Tableau Concepts:** "Explain the difference between a Table Calculation and a Calculated Field." "When would you use a FIXED LOD vs. an INCLUDE LOD?"
- **Blue vs. Green:** "Explain the fundamental difference between Discrete and Continuous fields in Tableau."
- **Performance:** "How do you optimize a slow-loading Tableau dashboard?" (Extracts, reducing LODs, hiding unused fields).
- **Live Build:** Be prepared to take a dataset you haven't seen and build 2-3 specific charts and a dashboard within a 30-minute time limit while sharing your screen.

### Tools
- Tableau Desktop
- Tableau Public (for portfolio building)
- Tableau Prep Builder
- Tableau Server/Cloud

### Skills
- Visual Analytics and Dashboard Design
- Tableau Calculation Syntax (LODs, Table Calcs)
- Data Storytelling
- Understanding Data Granularity
