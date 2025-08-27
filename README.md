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

## 🔧 Configuración

### Configuración de Vite

El proyecto utiliza una configuración personalizada de Vite con:

- Integración React Router v7
- Plugin Tailwind CSS v4
- Mapeo de rutas TypeScript
- Optimización del worker PDF.js

### Configuración de TypeScript

- Modo estricto habilitado
- Alias de rutas configurados (`@/*` → `./app/*`)
- Target ES2022 moderno
- Transformación React JSX

### Tailwind CSS

- Sistema de diseño personalizado con colores de marca
- Breakpoints responsivos
- Animaciones y utilidades personalizadas
- Enfoque de estilo basado en componentes

## 🎯 Características Principales en Detalle

### Motor de Análisis de CV

- **Puntuación Multidimensional**: Evalúa CVs en 4 categorías clave
- **Optimización ATS**: Proporciona recomendaciones específicas para compatibilidad ATS
- **Retroalimentación Contextual**: Sugerencias adaptadas basadas en descripción del trabajo y empresa
- **Puntuación Visual**: Componentes intuitivos de medidor y insignia para visualización de puntuación

### Asistente de Chat

- **Orientación Interactiva**: Sugerencias y mejoras en tiempo real
- **Consciente del Contexto**: Entiende el contenido del CV y los requisitos del trabajo
- **Multilingüe**: Soporte completo en español
- **Historial Persistente**: Mantiene el contexto de la conversación

### Pipeline de Procesamiento de Archivos

1. **Carga**: Carga segura de archivos con validación
2. **Conversión**: Conversión de PDF a imagen para análisis
3. **Almacenamiento**: Almacenamiento cifrado vía Puter.com
4. **Análisis**: Evaluación de contenido impulsada por IA
5. **Retroalimentación**: Generación de respuesta estructurada

## 🔒 Seguridad y Privacidad

- **Almacenamiento Seguro de Archivos**: Todos los archivos cifrados y almacenados de forma segura
- **Autenticación de Usuario**: Integración de autenticación Puter.com
- **Privacidad de Datos**: No se almacenan datos sensibles en código del lado del cliente
- **Validación de Entrada**: Validación integral de formularios y archivos

## 🌐 Internacionalización

La aplicación está completamente localizada en español con:

- Traducciones de componentes UI
- Localización de mensajes de error
- Traducciones de instrucciones de IA
- Consideraciones de accesibilidad

## 🧪 Guías de Desarrollo

### Estilo de Código

- **TypeScript**: Tipado estricto con interfaces comprensivas
- **Estructura de Componentes**: Componentes funcionales con hooks
- **Gestión de Estado**: Stores Zustand para estado complejo
- **Estilos**: Clases de utilidad Tailwind con componentes personalizados

### Mejores Prácticas

- **Rendimiento**: Carga perezosa y división de código
- **Accesibilidad**: Etiquetas ARIA y HTML semántico
- **Manejo de Errores**: Límites de error comprensivos
- **Pruebas**: Desarrollo type-safe con TypeScript

### Organización de Archivos

- **Componentes**: Organizados por característica y reutilización
- **Tipos**: Definiciones de tipos centralizadas
- **Utilidades**: Funciones de utilidad compartidas
- **Constantes**: Constantes de toda la aplicación

## 📈 Optimizaciones de Rendimiento

- **Optimización de Bundle**: Bundling eficiente y tree-shaking de Vite
- **Optimización de Imágenes**: Conversión optimizada de PDF a imagen
- **Gestión de Estado**: Stores Zustand eficientes
- **División de Código**: División de código basada en rutas con React Router
- **Optimización de Dependencias**: Importaciones selectivas y builds optimizados

## 🤝 Contribuyendo

1. **Fork del repositorio**
2. **Crear rama de característica**: `git checkout -b feature/caracteristica-increible`
3. **Commit de cambios**: `git commit -m 'Agregar característica increíble'`
4. **Push a la rama**: `git push origin feature/caracteristica-increible`
5. **Abrir Pull Request**

### Flujo de Trabajo de Desarrollo

- Seguir las guías de modo estricto TypeScript
- Mantener documentación de componentes
- Asegurar compatibilidad de diseño responsivo
- Probar en diferentes navegadores y dispositivos

## 🐳 Docker

El proyecto incluye configuración Docker para despliegue:

```bash
# Construir imagen Docker
docker build -t resume-analyzer .

# Ejecutar contenedor
docker run -p 3000:3000 resume-analyzer
```

## 📊 Estructura de Datos

### Modelo de CV

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

## 🔍 Monitoreo y Logging

- **Error Tracking**: Manejo comprensivo de errores con boundaries
- **Performance Monitoring**: Métricas de rendimiento integradas
- **User Analytics**: Seguimiento de interacciones de usuario (respetando privacidad)

## 📱 Compatibilidad

- **Navegadores**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Dispositivos**: Completamente responsivo (móvil, tablet, escritorio)
- **Accesibilidad**: Cumple con estándares WCAG 2.1 AA

## 🚀 Despliegue

### Variables de Entorno de Producción

```env
NODE_ENV=production
PUTER_API_KEY=tu_clave_api_produccion
PUTER_DOMAIN=tu_dominio_puter
```

### Consideraciones de Despliegue

- Configurar HTTPS para producción
- Implementar rate limiting para APIs
- Configurar monitoreo de salud
- Establecer backups automáticos

## 📄 Licencia

Este proyecto es privado y propietario. Todos los derechos reservados.

## 🆘 Soporte

Para soporte técnico o preguntas:

- Revisar la documentación del código base
- Verificar tipos TypeScript para contratos de API
- Examinar props e interfaces de componentes
- Consultar documentación de React Router v7 para preguntas de enrutamiento

## 🙏 Agradecimientos

- Equipo de React Router por la excelente v7
- Comunidad de Tailwind CSS por el increíble framework
- Puter.com por los servicios de almacenamiento y IA
- Contribuidores de código abierto que hicieron posible este proyecto

---

**Construido con ❤️ usando React Router v7, TypeScript y tecnologías web modernas**

_Última actualización: Enero 2025_
