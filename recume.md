
\documentclass[a4paper,11pt]{article}

% Package imports
\usepackage{latexsym}
\usepackage{xcolor}
\usepackage{fontawesome5}
\usepackage[T1]{fontenc}
\usepackage{fontawesome5}
\usepackage{ctex}
\usepackage{float}
\usepackage{ragged2e}
\usepackage[empty]{fullpage}
\usepackage{wrapfig}
\usepackage{tabularx}
\usepackage{titlesec}
\usepackage{geometry}
\usepackage{hyperref}
\usepackage{hyperref}
\usepackage{marvosym}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage{fancyhdr}
\usepackage{multicol}
\usepackage{graphicx}
\usepackage{cfr-lm}
\usepackage[T1]{fontenc}
\usepackage{fontawesome5}
\usepackage{ragged2e}

% Color definitions
\definecolor{darkblue}{RGB}{0,0,139}

% Page layout
\setlength{\multicolsep}{0pt}
\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}
\geometry{left=1.4cm, top=0.8cm, right=1.2cm, bottom=1cm}
\setlength{\footskip}{5pt} % Addressing fancyhdr warning

% Hyperlink setup (moved after fancyhdr to address warning)
\usepackage[hidelinks]{hyperref}
\hypersetup{
    colorlinks=true,
    linkcolor=darkblue,
    filecolor=darkblue,
    urlcolor=darkblue,
}

% Custom box settings
\usepackage[most]{tcolorbox}
\tcbset{
    frame code={},
    center title,
    left=0pt,
    right=0pt,
    top=0pt,
    bottom=0pt,
    colback=gray!20,
    colframe=white,
    width=\dimexpr\textwidth\relax,
    enlarge left by=-2mm,
    boxsep=4pt,
    arc=0pt,outer arc=0pt,
}

% URL style
\urlstyle{same}

% Text alignment
\raggedright
\setlength{\tabcolsep}{0in}

% Section formatting
\titleformat{\section}{
    \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-7pt}]

% Custom commands
\newcommand{\resumeItem}[2]{
    \item{
        \textbf{#1}{\hspace{0.5mm}#2 \vspace{-0.5mm}}
    }
}

\newcommand{\resumePOR}[3]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1}\hspace{0.3mm}#2 & \textit{\small{#3}}
    \end{tabular*}
    \vspace{-2mm}
}

\newcommand{\resumeSubheading}[4]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.98\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & \textit{\footnotesize{#4}} \\
        \textit{\footnotesize{#3}} &  \footnotesize{#2}\\
    \end{tabular*}
    \vspace{-2.4mm}
}

\newcommand{\resumeProject}[4]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.98\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & \textit{\footnotesize{#3}} \\
        \footnotesize{\textit{#2}} & \footnotesize{#4}
    \end{tabular*}
    \vspace{-2.4mm}
}

\newcommand{\resumeSubItem}[2]{\resumeItem{#1}{#2}\vspace{-4pt}}

\renewcommand{\labelitemi}{$\vcenter{\hbox{\tiny$\bullet$}}$}
\renewcommand{\labelitemii}{$\vcenter{\hbox{\tiny$\circ$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=*,labelsep=1mm]}
\newcommand{\resumeHeadingSkillStart}{\begin{itemize}[leftmargin=*,itemsep=1.7mm, rightmargin=2ex]}
\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=*,labelsep=1mm,itemsep=0.5mm]}

\newcommand{\resumeSubHeadingListEnd}{\end{itemize}\vspace{2mm}}
\newcommand{\resumeHeadingSkillEnd}{\end{itemize}\vspace{-2mm}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-2mm}}
\newcommand{\cvsection}[1]{%
\vspace{2mm}
\begin{tcolorbox}
    \textbf{\large #1}
\end{tcolorbox}
    \vspace{-4mm}
}

\newcolumntype{L}{>{\raggedright\arraybackslash}X}%
\newcolumntype{R}{>{\raggedleft\arraybackslash}X}%
\newcolumntype{C}{>{\centering\arraybackslash}X}%

% Commands for icon sizing and positioning
\newcommand{\socialicon}[1]{\raisebox{-0.05em}{\resizebox{!}{1em}{#1}}}
\newcommand{\ieeeicon}[1]{\raisebox{-0.3em}{\resizebox{!}{1.3em}{#1}}}

% Font options
\newcommand{\headerfonti}{\fontfamily{phv}\selectfont} % Helvetica-like (similar to Arial/Calibri)
\newcommand{\headerfontii}{\fontfamily{ptm}\selectfont} % Times-like (similar to Times New Roman)
\newcommand{\headerfontiii}{\fontfamily{ppl}\selectfont} % Palatino (elegant serif)
\newcommand{\headerfontiv}{\fontfamily{pbk}\selectfont} % Bookman (readable serif)
\newcommand{\headerfontv}{\fontfamily{pag}\selectfont} % Avant Garde-like (similar to Trebuchet MS)
\newcommand{\headerfontvi}{\fontfamily{cmss}\selectfont} % Computer Modern Sans Serif
\newcommand{\headerfontvii}{\fontfamily{qhv}\selectfont} % Quasi-Helvetica (another Arial/Calibri alternative)
\newcommand{\headerfontviii}{\fontfamily{qpl}\selectfont} % Quasi-Palatino (another elegant serif option)
\newcommand{\headerfontix}{\fontfamily{qtm}\selectfont} % Quasi-Times (another Times New Roman alternative)
\newcommand{\headerfontx}{\fontfamily{bch}\selectfont} % Charter (clean serif font)

\begin{document}
\headerfontiii

% Header
\begin{center}
    {\Huge\textbf{MINHAZUL ISLAM}}
\end{center}
\vspace{-6mm}

\begin{center}
    \small{
    +86 15990259205 | \href{mailto:minhaz249602@gmail.com}{minhaz249602@gmail.com} |
    \href{mailto:22351396@zju.cn}{22351396@zju.cn}
    }
\end{center}
\vspace{-6mm}

\begin{center}
    \small{
    \socialicon{\faLinkedin} \href{https://www.linkedin.com/in/minhazul-islam-43b3a4221/}{MINHAZUL ISLAM} |
    \socialicon{\faGithub} \href{https://github.com/minhazulzju}{minhazul} |
    \socialicon{\faGlobe} \href{https://minhazulzju.github.io/resume/}{Portfolio}
    }
\end{center}
\vspace{-6mm}
\begin{center}
    \small{Zhejiang University, Xuefu Rd, Yinzhou District, Zhejiang}
\end{center}

\vspace{-4mm}

\section{\textbf{Summary}}
\vspace{1mm}
\small{
\justifying{A highly analytical and driven Computer Scientist with a Master's focus on integrating technology, design, and data-driven solutions. My expertise centers on applied AI/ML principles, demonstrated by a strong command of Python, data analysis, and complex system development. I possess a proven capability for developing and deploying sophisticated automated solutions, including the use of advanced Natural Language Processing (NLP) models and machine learning classifiers within full-stack environments. My interdisciplinary background provides a unique ability to translate complex technical challenges into efficient, user-centric systems. Seeking to leverage advanced algorithmic and problem-solving skills to contribute to strategic innovation and engineering excellence within a data-intensive organization.}
}
\vspace{-2mm}

\section{\textbf{Education}}
\vspace{-0.4mm}
\resumeSubHeadingListStart

\resumeSubheading
{Zhejiang University }{Zhejiang, China}
{Masters in Industrial Design Engineering }{September 2023 - Present}


\resumeSubheading
{Yunnan University }{Kunming, China}
{Bachelor in Computer Science and Technology } {2019-2023}

\resumeSubHeadingListEnd
\vspace{-6mm}

\section{\textbf{Experience}}
\vspace{-0.4mm}
\resumeSubHeadingListStart
\resumeSubheading
    {{Piliving}}{Ningbo, China}
    {Technical Product Manager}{June 2024 - September 2024}
    \resumeItemListStart
        \item Executed a large-scale data science project by leveraging the Pushshift API to harvest 100,000+ posts/comments from user forums, employing text mining to analyze product failure points.
        \item Analyzed structured and unstructured user data to identify, categorize, and quantify critical product problems, providing data-driven guidance for the next-generation product roadmap.
        \item Engineered the control panel system for a new pizza oven, applying embedded systems and technical design skills to build a functional, integrated component.
        \item Designed innovative 3D models for new products using Autodesk Fusion 360 based on data insights, showcasing technical design proficiency.
        \item Managed the end-to-end product development lifecycle, coordinating supplier technical specifications and leading cross-functional teams to ensure quality standards.
    \resumeItemListEnd
\resumeSubheading
\resumeSubheading
\resumeSubheading
\section{\textbf{Experience}}
\vspace{-0.4mm}
\resumeSubHeadingListStart
\resumeSubheading
    {{Piliving}}{Ningbo, China}
    {Technical Product Manager}{June 2024 - September 2024}
    \resumeItemListStart
        \item Executed a large-scale data science project by leveraging the Pushshift API to harvest 100,000+ posts/comments from user forums, employing text mining to analyze product failure points.
        \item Analyzed structured and unstructured user data to identify, categorize, and quantify critical product problems, providing data-driven guidance for the next-generation product roadmap.
        \item Engineered the control panel system for a new pizza oven, applying embedded systems and technical design skills to build a functional, integrated component.
        \item Designed innovative 3D models for new products using Autodesk Fusion 360 based on data insights, showcasing technical design proficiency.
        \item Managed the end-to-end product development lifecycle, coordinating supplier technical specifications and leading cross-functional teams to ensure quality standards.
    \resumeItemListEnd
\resumeSubheading
    {{ProFabx}}{Ningbo, China}
    {Software Engineer}{June 2024 - September 2024}
    \resumeItemListStart
        \item Developed 3D models using Autodesk Fusion 360 and Inventor, transitioning from manual design to automated workflows.
        \item Created Python scripts to automate 3D modeling processes through the Autodesk Inventor API, increasing design efficiency by 40\%.
        \item Designed a web interface using JavaScript that dynamically updates 3D models based on parameter changes.
        \item Implemented a parametric modeling system where dimension modifications automatically propagate through entire designs.
    \resumeItemListEnd
\resumeSubheading
    {{Synexia AI}}{Ningbo, China}
    {AI Platform Engineer (Intern)}{March 2025 - August 2026}
    \resumeItemListStart
        \item Engineered an Intent-Driven Query Planner for a petrochemical ERP chatbot, reducing end-to-end latency from 90--478s to 30--45s with TTFT under 10s using structured JSON intent extraction, parallel SQL execution, and streaming LLM synthesis.
        \item Architected a Universal Context Safety system (SafeContextGate + Data-Pointer + Deterministic Fallback) that eliminated all LLM context-window crashes across data queries, web search, file uploads, and long conversations.
        \item Redesigned the dashboard generation pipeline from static widgets into full-stack deployable apps with real database data, WebSocket live updates (2s refresh), and a conversational iteration loop for live design and data changes.
        \item Built production-grade multi-agent orchestration (17-node LangGraph), sandboxed code execution (Docker-isolated Python/PPT/webapp sandboxes), and a Tool/Skill/MCP Gateway with permission filtering and audit logging.
        \item Implemented deterministic pre-rendering pipelines and Python guardrail layers that block hallucinated numbers before they reach users, with mandatory data-source attribution and confidence-tagged causal chains.
    \resumeItemListEnd
\resumeSubHeadingListEnd
\vspace{-4mm}



\section{\textbf{Projects}}
    {Software Engineer}{June 2024 - September 2024}
    \resumeItemListStart
        \item Developed 3D models using Autodesk Fusion 360 and Inventor, transitioning from manual design to automated workflows.
        \item Created Python scripts to automate 3D modeling processes through the Autodesk Inventor API, increasing design efficiency by 40\%.
        \item Designed a web interface using JavaScript that dynamically updates 3D models based on parameter changes.
        \item Implemented a parametric modeling system where dimension modifications automatically propagate through entire designs.
    \resumeItemListEnd
\resumeSubheading
    {{Synexia AI}}{Ningbo, China}
    {AI Platform Engineer (Intern)}{March 2025 - August 2026}
    \resumeItemListStart
        \item Engineered an Intent-Driven Query Planner for a petrochemical ERP chatbot, reducing end-to-end latency from 90--478s to 30--45s with TTFT under 10s using structured JSON intent extraction, parallel SQL execution, and streaming LLM synthesis.
        \item Architected a Universal Context Safety system (SafeContextGate + Data-Pointer + Deterministic Fallback) that eliminated all LLM context-window crashes across data queries, web search, file uploads, and long conversations.
        \item Redesigned the dashboard generation pipeline from static widgets into full-stack deployable apps with real database data, WebSocket live updates (2s refresh), and a conversational iteration loop for live design and data changes.
        \item Built production-grade multi-agent orchestration (17-node LangGraph), sandboxed code execution (Docker-isolated Python/PPT/webapp sandboxes), and a Tool/Skill/MCP Gateway with permission filtering and audit logging.
        \item Implemented deterministic pre-rendering pipelines and Python guardrail layers that block hallucinated numbers before they reach users, with mandatory data-source attribution and confidence-tagged causal chains.
    \resumeItemListEnd
\resumeSubHeadingListEnd
    {Software Engineer}{June 2024 - September 2024}
    \resumeItemListStart
        \item Developed 3D models using Autodesk Fusion 360 and Inventor, transitioning from manual design to automated workflows.
        \item Created Python scripts to automate 3D modeling processes through the Autodesk Inventor API, increasing design efficiency by 40\%.
        \item Designed a web interface using JavaScript that dynamically updates 3D models based on parameter changes.
        \item Implemented a parametric modeling system where dimension modifications automatically propagate through entire designs.
    \resumeItemListEnd
\resumeSubheading
    {{Synexia AI}}{Ningbo, China}
    {AI Platform Engineer (Intern)}{March 2025 - August 2026}
    \resumeItemListStart
        \item Engineered an Intent-Driven Query Planner for a petrochemical ERP chatbot, reducing end-to-end latency from 90--478s to 30--45s with TTFT under 10s using structured JSON intent extraction, parallel SQL execution, and streaming LLM synthesis.
        \item Architected a Universal Context Safety system (SafeContextGate + Data-Pointer + Deterministic Fallback) that eliminated all LLM context-window crashes across data queries, web search, file uploads, and long conversations.
        \item Redesigned the dashboard generation pipeline from static widgets into full-stack deployable apps with real database data, WebSocket live updates (2s refresh), and a conversational iteration loop for live design and data changes.
        \item Built production-grade multi-agent orchestration (17-node LangGraph), sandboxed code execution (Docker-isolated Python/PPT/webapp sandboxes), and a Tool/Skill/MCP Gateway with permission filtering and audit logging.
        \item Implemented deterministic pre-rendering pipelines and Python guardrail layers that block hallucinated numbers before they reach users, with mandatory data-source attribution and confidence-tagged causal chains.
    \resumeItemListEnd
\resumeSubHeadingListEnd
    {Software Engineer}{June 2024 - September 2024}
    \resumeItemListStart
        \item Developed 3D models using Autodesk Fusion 360 and Inventor, transitioning from manual design to automated workflows.
        \item Created Python scripts to automate 3D modeling processes through the Autodesk Inventor API, increasing design efficiency by 40\%.
        \item Designed a web interface using JavaScript that dynamically updates 3D models based on parameter changes.
        \item Implemented a parametric modeling system where dimension modifications automatically propagate through entire designs.
    \resumeItemListEnd
\resumeSubHeadingListEnd
\vspace{-4mm}



\section{\textbf{Projects}}
\vspace{-0.4mm}
\resumeSubHeadingListStart
\resumeProject
    {AI-Powered Mental Health Peer Support Platform(Biopolar Disorder)} % Title
    {Zhejiang University} % Institution
    {2024 – 2025} % Dates
    {} % Final Detail (Left empty since link isn't in original)
\resumeItemListStart
    \resumeItem{\textbf{Tools:} Python, Flask, BERT, Sentence Transformers, SVM, Random Forest, XGBoost, LIWC, TextBlob, Elasticsearch, Pushshift API, RESTful API}
    \item Developed an end-to-end web platform for mental health peer support, integrating advanced NLP models (BERT, Sentence Transformers) and machine learning classifiers (SVM, Random Forest, XGBoost) for comment assessment, personalized recommendations, and real-time feedback.
    \item Engineered data pipelines using the Pushshift API to collect and preprocess Reddit data, and implemented linguistic and sentiment analysis (LIWC, TextBlob) to extract key features.
    \item Optimized Elasticsearch-based semantic search for retrieving relevant peer comments with high similarity, enhancing support quality.
    \item Built a user-friendly frontend and RESTful API, incorporating generative AI for comment enhancement and real-time feedback, significantly improving user engagement.
    \item Led full-stack development, including data preprocessing, model training, API design, and UI integration.
\resumeItemListEnd

\resumeProject
    {SPROUT – Shape-changing Meditation Device for Academic Mindset Support}
    {Zhejiang University}
    {Oct 2024 – Dec 2024}
    {[\href{https://minhazulzju.github.io/SPROUT/}{\textcolor{darkblue}{\faGithub}}]}
\resumeItemListStart
    \resumeItem{\textbf{Tools:} Arduino IDE/C++, Embedded Systems, Sensor Integration, Fusion 360}
    \item Designed a bio-inspired, shape-changing interactive board to help students turn academic challenges into opportunities for growth.
    \item Targeted the psychological stressor “Fear of Failure” by developing a supportive, non-intrusive intervention device.
    \item Integrated sensors and actuators with embedded systems (Arduino) to create a meditative interaction, helping users reflect on their mindset.
    \item Used metaphors like “planting a seed” to symbolize the transformation of negative emotions into growth, fostering resilience.
    \item Skills applied: System Design, Embedded Systems, Circuit Prototyping, C++ Programming, Sensor Integration, Prototype Development.
\resumeItemListEnd

\resumeProject
    {Autodesk Inventor API with Python – Parametric CAD Automation}
    {ProFabx}
    {Apr 2024 – Aug 2024}
    {[\href{https://minhazulzju.github.io/Autodesk-Inventor-API-with-Python-/}{\textcolor{darkblue}{\faGithub}}]}
\resumeItemListStart
    \resumeItem{\textbf{Tools:} Autodesk Inventor, Python, win32com.client}
    \item Created a parametric modeling system using Python to dynamically update Autodesk Inventor 3D models by modifying key dimensions.
    \item Automated repetitive CAD tasks, reducing design time and minimizing manual errors.
    \item Integrated Python scripting with Inventor’s API to streamline mechanical design workflows and improve prototyping efficiency.
\resumeItemListEnd

\resumeProject
    {InclusiveVision - Smart Glasses for Visually Impaired Individuals}
    {Zhejiang University}
    {December 2023}
    {[\href{https://nexmaker-fab.github.io/2023zjudem-The-Dynamic-Seven/\#/FINALPROJECT/final}{\textcolor{darkblue}{\faGithub}}]}
\resumeItemListStart
    \resumeItem{\textbf{Tools:} Arduino, Fusion 360, Flashforge 3D Printing, Talkie Library, Laser Cutting}
    \item Developed a prototype of smart glasses using an Arduino UNO and ultrasonic sensors, achieving real-time obstacle detection up to 50 cm.
    \item Implemented a voice alert system using the Talkie library, processing sensor data to provide immediate auditory feedback to users.
    \item Created 3D models of the glasses frame with Fusion 360, optimizing the design for comfort and functionality in a wearable form factor.
    \item Developed an integrated component with multiple ultrasonic sensors for easy assembly, enhancing the independence and safety of visually impaired users.
\resumeItemListEnd

\resumeProject
    {Product recommendation system based on Collaborative Filtering Algorithm}
    {Yunnan University}
    {2022 - 2023}
    {[\href{https://github.com/Minhazul249602/Product-Recommendation-System-Based-on-collaborative-algorithm}{\textcolor{darkblue}{\faGithub}}]}
\resumeItemListStart
    \resumeItem{\textbf{Tools:} Python, NumPy, Pandas, MongoDB, Matplotlib, Flask}
    \item Developed a collaborative filtering strategy for the goodbooks-10k data-set to generate high-quality recommendations.
    \item Implemented Python and related libraries (NumPy, Pandas, Matplotlib) for data analysis and visualization to achieve accurate recommendations.
    \item Created a recommendation model based on matrix factorization, ensuring personalized suggestions for users.
    \item Applied Euclidean Distance to analyze the similarity between books, enhancing the accuracy of recommendations.
\resumeItemListEnd

\resumeProject
    {IoT-based Smart Attendance System with Face Recognition}
    {Yunnan University}
    {2022}
    {[\href{https://minhazulzju.github.io/IOT-Based-Dormitory-Attendance-System/}{\textcolor{darkblue}{\faGithub}}]}
\resumeItemListStart
    \resumeItem{\textbf{Tools:} ESP32-CAM, Arduino IDE/C++, Embedded Systems, HTTPS, IoT Cloud}
    \item Developed a smart, IoT-based attendance system using an ESP32-CAM for facial recognition to automate the attendance-taking process.
    \item Implemented a secure authentication workflow where the system automatically detects, recognizes, and registers students, storing data in an IoT cloud via HTTPS.
    \item Designed a contact-free solution to address safety concerns from the COVID-19 pandemic, replacing traditional manual and contact-based biometric systems.
    \item Created a system to prevent proxy attendance by only validating registered users, enhancing the reliability and security of the process.
    \item Applied skills in embedded systems, circuit prototyping, and C++ programming to integrate the hardware and software components.
\resumeItemListEnd
\resumeSubHeadingListEnd

\section{\textbf{Publications}}
\vspace{0.2mm}
\small{
\begin{enumerate}[leftmargin=*, labelsep=0.5em, align=left, widest={[\textbf{C.3}]}, itemindent=0em, label={\textbf{[\arabic*]}}]
\item[\textbf{[C.1]}] Minhazul Islam, Mengru Xue, and Tasnim Afra (2025). \textbf{Exploring Psychologist-Applied Biomarkers in Bipolar Disorder: A Systematic Framework}. In \textit{Proceedings of the 24th IFIP International Conference on Entertainment Computing (ICEC 2025)}, Tokyo, Japan. \href{https://doi.org/10.1007/978-3-032-02534-0_8}{doi:10.1007/978-3-032-02534-0_8}
\item[\textbf{[C.2]}] Tasnim Afra, Mengru Xue, and Minhazul Islam (2025). {\textbf{Enhancing Biofeedback Interventions for Depression and Anxiety through Entertainment Computing: A Systematic Review}}. In \textit{Proceedings of the 24th IFIP International Conference on Entertainment Computing (ICEC 2025)}, Tokyo, Japan. \href{https://doi.org/10.1007/978-3-032-02534-0_6}{doi:10.1007/978-3-032-02534-0_6}
\end{enumerate}
}

\section{\textbf{Honors \& Awards}}
\vspace{-0.4mm}
\resumeSubHeadingListStart
    \resumeSubheading
        {United Nations Technology Bank}{}{\href{https://www.un.org/technologybank/news/global-youth-talent-empower-design-new-era-admission-international-design-education-program}{Global Youth Talent Program 2023}}{}
        \resumeItemListStart
            \item Selected among top young designers worldwide for a prestigious UN program, recognized for innovative 3D design and engineering solutions.
            \item Participated in a curriculum focused on bridging advanced design with sustainable development goals.
            \item Program featured on the official UN Technology Bank website.
        \resumeItemListEnd
\resumeSubHeadingListEnd

\section{\textbf{Skills}}
\vspace{-0.4mm}
\resumeHeadingSkillStart
    \resumeSubItem{Programming:}
        {Python, C, JavaScript, win32com (COM Automation), API Integration}
    \resumeSubItem{Computer-Aided Design \& Automation:}
        {3D Modeling (Fusion 360, Inventor), Technical Drawings, Parametric Design, Product Visualization, Autodesk Inventor API, Design Automation}
    \resumeSubItem{Data Science:}
        {NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, MongoDB}
    \resumeSubItem{Machine Learning \& NLP:}
    {XGBoost, Scikit-learn, TextBlob, NLTK, SentenceTransformer}
    \resumeSubItem{Web Technologies:}
        {HTML5, CSS3, JavaScript, React.js, Node.js}
    \resumeSubItem{Embedded Systems:}
        {Arduino IDE, Circuit Prototyping, Sensor Integration}
\resumeHeadingSkillEnd

\end{document}