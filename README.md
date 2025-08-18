# Talk2PDF

## Overview

Talk2PDF is an AI-powered chat application that revolutionizes how users interact with PDF documents using natural language. The platform streamlines document analysis, summarization, and collaboration across multiple sectors by providing instant, context-aware answers, multilingual support, and advanced file management capabilities.

## Live Link: 
https://talk2pdf-ten.vercel.app/

## 🚀 Key Features

### 🤖 AI-Powered Document Interaction

-   Natural language queries for PDF documents
-   Context-aware responses extracted directly from documents
-   Dynamic query processing and intelligent response generation

## UI 
![Alt Text](https://github.com/PranayChowdhury00/talk2pdf/blob/main/Screenshot%202025-05-16%20230358.png?raw=true)
![Alt Text](https://github.com/PranayChowdhury00/talk2pdf/blob/main/Screenshot%202025-05-16%20230420.png?raw=true)



### 📝 Customizable AI Summarization

-   Multiple summary formats (TL;DR, bullet points, executive briefs)
-   Adjustable summary parameters (length, tone, focus areas)
-   Technical and non-technical summary options

### 🌐 Multilingual Support

-   User interface available in English and Bangla
-   PDF content processing in English and Bangla
-   Future expansion planned for additional languages

### 📁 Advanced File Management

-   Bulk file upload support (PDF, DOCX, image-based PDFs)
-   Folder organization and tagging system
-   Efficient file retrieval and management

### 💡 Smart Features

-   Chat bookmarks for critical AI responses
-   Topic-based bookmark organization
-   Centralized dashboard for quick access
-   Semantic PDF search functionality
-   Real-time collaboration and chat
-   Persistent chat history with searchable timestamps

### 📊 Export Capabilities

-   Download AI-generated responses
-   Multiple export formats (PDF, CSV, TXT)
-   Complete chat log export options

## 💎 Subscription Tiers

### Free Tier

-   5 daily document uploads
-   Basic summarization features
-   Standard chat functionality

### Premium Tier

-   Unlimited daily uploads
-   OCR for image-based PDFs
-   Priority support
-   Advanced AI models
-   Enhanced features

## 🛠️ Technology Stack

### Frontend

-   **Next.js**: Server-side rendering, fast page loads, SEO optimization
-   **TypeScript**: Enhanced code quality and type safety
-   **React Context**: State management for real-time features
-   **Tailwind CSS**: Modern, responsive UI design

### Backend & Infrastructure

-   **Supabase**: Used for secure file storage.
-   **OpenRouter API**: For accessing various large language models.
-   **PDF.js**: PDF document handling

## 🎯 Target Sectors & Use Cases

### 📚 Education & Academia

-   Students: Interactive textbook comprehension
-   Researchers: Literature review and dataset analysis

### ⚖️ Legal & Compliance

-   Contract clause analysis
-   GDPR/HIPAA compliance auditing
-   Document verification

### 🏥 Healthcare & Pharmaceuticals

-   Patient record analysis
-   Clinical trial report processing
-   Treatment protocol research

### 💼 Corporate & Business

-   Financial report analysis
-   Market research processing
-   HR document screening

### 📰 Publishing & Media

-   Automated fact-checking
-   Source verification
-   Quote extraction

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn
-   OpenRouter API key
-   Supabase project URL and anon key

### Installation

1. Clone the repository

```bash
git clone https://github.com/PranayChowdhury00/talk2pdf.git
cd talk2pdf
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Configure environment variables
   Create a `.env.local` file:

```
OPENROUTER_API_KEY=your_openrouter_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to access the application.

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, please create an issue in the repository or contact our support team.

## 🌟 Acknowledgments

-   OpenRouter for AI capabilities
-   Supabase for infrastructure support
-   Our amazing contributors and users
