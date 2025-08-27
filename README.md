# Resume Analyzer 🚀

A sophisticated AI-powered resume analysis platform built with React Router v7, TypeScript, and Tailwind CSS. This application provides intelligent ATS scoring, detailed feedback, and actionable insights to help job seekers optimize their resumes for their dream positions.

## 🌟 Features

### Core Functionality

- **AI-Powered Analysis**: Advanced resume evaluation using AI feedback systems
- **ATS Score Calculation**: Comprehensive Applicant Tracking System compatibility scoring
- **Multi-Category Evaluation**: Detailed analysis of Tone & Style, Content, Structure, and Skills
- **PDF Processing**: Seamless PDF upload and conversion to images for analysis
- **Real-Time Chat Assistant**: Interactive resume improvement suggestions
- **Multilingual Support**: Complete localization in Spanish

### Technical Highlights

- **Modern React Architecture**: Built with React Router v7 and React 19
- **Type Safety**: Complete TypeScript implementation with strict checking
- **State Management**: Zustand for efficient client-side state management
- **File Storage**: Puter.com integration for secure storage
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Optimized Performance**: Vite build system with optimized dependencies

## 🏗️ Architecture

### Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── home/            # Home page components
│   ├── layout/          # Layout components (navbar, etc.)
│   ├── resume/          # Resume analysis components
│   │   ├── chat/        # Chat assistant components
│   │   ├── summary/     # Score summary components
│   │   └── ui/          # Shared UI components
│   ├── upload/          # File upload components
│   └── user/            # User components
├── lib/                 # Utility libraries
│   ├── client/          # Client-side utilities
│   ├── schemas/         # Validation schemas
│   ├── pdf-to-img.ts   # PDF to image conversion
│   └── utils.ts         # Utility functions
├── routes/              # Application routes
│   ├── auth.tsx         # Authentication
│   ├── home.tsx         # Home page
│   ├── upload.tsx       # Resume upload
│   ├── resume.tsx       # Resume analysis
│   ├── user.tsx         # User profile
│   └── wipe.tsx         # Data cleanup
├── types/               # TypeScript type definitions
├── contants/            # Application constants
└── app.css             # Global styles
```

### Technology Stack

- **Frontend**: React 19, React Router v7, TypeScript
- **Styling**: Tailwind CSS v4, Custom CSS animations
- **State Management**: Zustand
- **File Processing**: PDF.js for PDF manipulation
- **Build Tool**: Vite with React Router integration
- **Storage**: Puter.com (file storage and key-value)
- **AI Integration**: Puter.com AI services
- **Code Quality**: ESLint, Prettier, TypeScript strict mode

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- Puter.com account and API credentials

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd resume-analizer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   # Add Puter.com credentials and other environment variables
   PUTER_API_KEY=your_puter_api_key
   # Add other required environment variables
   ```

4. **Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## 🔧 Configuration

### Vite Configuration

The project uses a custom Vite configuration with:

- React Router v7 integration
- Tailwind CSS v4 plugin
- TypeScript path mapping
- PDF.js worker optimization

### TypeScript Configuration

- Strict mode enabled
- Path aliases configured (`@/*` → `./app/*`)
- Modern ES2022 target
- React JSX transformation

### Tailwind CSS

- Custom design system with brand colors
- Responsive breakpoints
- Custom animations and utilities
- Component-based styling approach

## 🎯 Key Features in Detail

### Resume Analysis Engine

- **Multi-Dimensional Scoring**: Evaluates resumes across 4 key categories
- **ATS Optimization**: Provides specific recommendations for ATS compatibility
- **Contextual Feedback**: Tailored suggestions based on job description and company
- **Visual Scoring**: Intuitive gauge and badge components for score visualization

### Chat Assistant

- **Interactive Guidance**: Real-time suggestions and improvements
- **Context-Aware**: Understands resume content and job requirements
- **Multilingual**: Complete Spanish language support
- **Persistent History**: Maintains conversation context

### File Processing Pipeline

1. **Upload**: Secure file upload with validation
2. **Conversion**: PDF to image conversion for analysis
3. **Storage**: Encrypted storage via Puter.com
4. **Analysis**: AI-powered content evaluation
5. **Feedback**: Structured response generation

## 🔒 Security and Privacy

- **Secure File Storage**: All files encrypted and stored securely
- **User Authentication**: Puter.com authentication integration
- **Data Privacy**: No sensitive data stored in client-side code
- **Input Validation**: Comprehensive form and file validation

## 🌐 Internationalization

The application is fully localized in Spanish with:

- UI component translations
- Error message localization
- AI instruction translations
- Accessibility considerations

## 🧪 Development Guidelines

### Code Style

- **TypeScript**: Strict typing with comprehensive interfaces
- **Component Structure**: Functional components with hooks
- **State Management**: Zustand stores for complex state
- **Styling**: Tailwind utility classes with custom components

### Best Practices

- **Performance**: Lazy loading and code splitting
- **Accessibility**: ARIA labels and semantic HTML
- **Error Handling**: Comprehensive error boundaries
- **Testing**: Type-safe development with TypeScript

### File Organization

- **Components**: Organized by feature and reusability
- **Types**: Centralized type definitions
- **Utilities**: Shared utility functions
- **Constants**: Application-wide constants

## 📈 Performance Optimizations

- **Bundle Optimization**: Efficient Vite bundling and tree-shaking
- **Image Optimization**: Optimized PDF to image conversion
- **State Management**: Efficient Zustand stores
- **Code Splitting**: Route-based code splitting with React Router
- **Dependency Optimization**: Selective imports and optimized builds

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Workflow

- Follow TypeScript strict mode guidelines
- Maintain component documentation
- Ensure responsive design compatibility
- Test across different browsers and devices

## 🐳 Docker

The project includes Docker configuration for deployment:

```bash
# Build Docker image
docker build -t resume-analyzer .

# Run container
docker run -p 3000:3000 resume-analyzer
```

## 📊 Data Structure

### Resume Model

```typescript
interface ResumeData {
  id: string
  resumePath: string
  imagePath: string
  companyName: string
  jobTitle: string
  jobDescription: string
  feedback: AnalysisFeedback
}

interface AnalysisFeedback {
  atsScore: number
  overallScore: number
  categories: {
    toneStyle: CategoryScore
    content: CategoryScore
    structure: CategoryScore
    skills: CategoryScore
  }
  suggestions: string[]
}
```

## 🔍 Monitoring and Logging

- **Error Tracking**: Comprehensive error handling with boundaries
- **Performance Monitoring**: Built-in performance metrics
- **User Analytics**: User interaction tracking (privacy-respecting)

## 📱 Compatibility

- **Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Devices**: Fully responsive (mobile, tablet, desktop)
- **Accessibility**: WCAG 2.1 AA standards compliant

## 🚀 Deployment

### Production Environment Variables

```env
NODE_ENV=production
PUTER_API_KEY=your_production_api_key
PUTER_DOMAIN=your_puter_domain
```

### Deployment Considerations

- Configure HTTPS for production
- Implement rate limiting for APIs
- Set up health monitoring
- Establish automated backups

## 📄 License

This project is private and proprietary. All rights reserved.

## 🆘 Support

For technical support or questions:

- Review the codebase documentation
- Check TypeScript types for API contracts
- Examine component props and interfaces
- Consult React Router v7 documentation for routing questions

## 🙏 Acknowledgments

- React Router team for the excellent v7
- Tailwind CSS community for the amazing framework
- Puter.com for storage and AI services
- Open source contributors who made this project possible

---

**Built with ❤️ using React Router v7, TypeScript, and modern web technologies**

_Last updated: January 2025_
