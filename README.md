# Project-Manager

A modern React-based project management application built to learn and practice React fundamentals, state management, and Tailwind CSS styling with smooth transitions.

## 🎯 Project Overview

This is a project management tool that allows users to:
- Create and manage multiple projects
- Add tasks to each project
- View project details with descriptions and dates
- Delete projects and tasks
- Navigate between projects with a clean, responsive interface

The application demonstrates core React concepts including component composition, state management, and the functional programming paradigm using `map`, `filter`, and array manipulation methods.

## 🚀 Technologies Used

- **React 19** - UI library with hooks
- **Vite** - Build tool and development server
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **UUID** - Unique identifier generation

## 🎨 Tailwind CSS Skills & Transitions

This project showcases advanced Tailwind CSS usage and smooth CSS transitions:

### Responsive Design
- Mobile-first approach with breakpoint utilities (`md:`, `sm:`)
- Flexible layouts using `flex` and `grid` utilities
- Responsive spacing and sizing (`w-full`, `md:w-1/4`, `md:w-3/4`)

### Transition Effects
The application features smooth transitions throughout:

**Button Transitions** (`Button.jsx`):
```jsx
transition-colors duration-300
hover:bg-white hover:text-black hover:border-black
```
- Smooth color transitions on hover (300ms duration)
- Border color changes for visual feedback

**Input Focus States** (`TaskCreation.jsx`, `Input.jsx`):
```jsx
transition-colors duration-200
focus:bg-gray-100 focus:outline-none
```
- Background color transitions on focus
- Smooth state changes for better UX

### Custom Animations
Custom CSS animations defined in `index.css`:
- **Label Wave Animation**: Character-by-character animation on hover
- Uses `@keyframes` with `transform` and `font-weight` transitions
- Optimized with `will-change` property for performance

### Design System
- Consistent border styling (`border-2 border-black`)
- Rounded corners (`rounded-md`, `rounded-xl`)
- Spacing system using Tailwind's scale (`gap-2`, `gap-4`, `gap-6`, `p-4`, `p-8`)
- Color palette with black/white contrast theme

## ⚛️ React State Management

The application demonstrates React state management using the **map, filter, and array manipulation paradigm**:

### State Structure

**Main App State** (`App.jsx`):
```jsx
const [managmentState, setManagmentState] = useState({
  projects: [],
  selectedProject: null,
});
```

### Array Manipulation Methods

#### 1. **Map** - Rendering Lists
Used extensively to render dynamic lists from state:

**Projects List** (`Sidebar.jsx`):
```jsx
{projectList.map((project) => (
  <ProjectItem key={project.id} project={project} setSelectedProject={setSelectedProject} />
))}
```

**Tasks List** (`ProjectDetails.jsx`):
```jsx
{tasks.map((task) => (
  <TaskItem key={task.id} task={task} removeTask={removeTask} />
))}
```

#### 2. **Filter** - Removing Items
Used to remove items from arrays without mutating state:

**Remove Project** (`App.jsx`):
```jsx
const removeProject = (project) => {
  setManagmentState({
    ...managmentState,
    projects: managmentState.projects.filter((p) => p.id !== project.id),
    selectedProject: null,
  });
};
```

**Remove Task** (`ProjectDetails.jsx`):
```jsx
const removeTask = (task) => {
  setTasks(tasks.filter((t) => t.id !== task.id));
};
```

#### 3. **Spread Operator** - Adding Items
Used to add new items to arrays immutably:

**Add Project** (`App.jsx`):
```jsx
const addProject = (project) => {
  setManagmentState({
    ...managmentState,
    projects: [...managmentState.projects, project],
  });
};
```

**Add Task** (`ProjectDetails.jsx`):
```jsx
const addTask = (task) => {
  setTasks([...tasks, task]);
};
```

### State Update Patterns

**Immutable Updates**: All state updates use the spread operator to create new objects/arrays:
```jsx
setProject({
  ...project,
  [e.target.name]: e.target.value,
});
```

**Conditional State Updates**: State changes based on conditions:
```jsx
const setCreatingProjectState = (value) => {
  setCreatingProject(value);
  value ? setManagmentState({
    ...managmentState,
    selectedProject: null,
  }) : null;
};
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Button.jsx              # Reusable button with transitions
│   ├── Input.jsx               # Form input component
│   ├── MainContainer.jsx       # Main content area
│   ├── ProjectCreation.jsx     # Project creation form
│   ├── ProjectDetails.jsx      # Project detail view with tasks
│   ├── ProjectItem.jsx         # Individual project in sidebar
│   ├── Sidebar.jsx             # Projects navigation sidebar
│   ├── StartingMenu.jsx        # Empty state component
│   ├── TaskCreation.jsx        # Task input form
│   └── TaskItem.jsx            # Individual task display
├── App.jsx                     # Main app component with state
├── main.jsx                    # Application entry point
└── index.css                   # Global styles and animations
```

## 🎓 Key Learning Concepts

### React Hooks
- `useState` - Managing component and application state
- State lifting - Sharing state between components
- Props drilling - Passing data through component hierarchy

### Functional Programming
- **Map**: Transform arrays into JSX elements
- **Filter**: Create new arrays with filtered items
- **Spread Operator**: Immutable array/object updates
- **Array Methods**: Functional approach to data manipulation

### Component Architecture
- **Presentational Components**: `Button`, `Input`, `TaskItem`
- **Container Components**: `App`, `ProjectDetails`, `Sidebar`
- **Composition**: Building complex UIs from simple components

### CSS & Styling
- Utility-first CSS with Tailwind
- Responsive design patterns
- CSS transitions and animations
- Custom keyframe animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Project-Manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Features

- ✅ Create new projects with name, description, and date
- ✅ View project details in a dedicated view
- ✅ Add tasks to projects
- ✅ Remove projects and tasks
- ✅ Responsive design (mobile and desktop)
- ✅ Smooth CSS transitions and animations
- ✅ Clean, modern UI with Tailwind CSS

## 🎨 Design Highlights

- **Black & White Theme**: High contrast, modern aesthetic
- **Smooth Transitions**: 200-300ms transitions for interactive elements
- **Responsive Layout**: Adapts seamlessly from mobile to desktop
- **Custom Animations**: Label wave effect on form inputs
- **Consistent Spacing**: Tailwind's spacing scale for visual harmony

## 📚 Credits

This project is based on the course:

**React - The Complete Guide (incl Hooks, React Router, Redux)**  
by **Maximilian Schwarzmüller** – Udemy

The project was created as a learning exercise to understand:
- React fundamentals and hooks
- State management patterns
- Array manipulation with map, filter, and spread operator
- Tailwind CSS utility-first styling
- CSS transitions and animations
- Component composition and architecture

## 🔧 Development Notes

- State is managed at the App level and passed down as props
- Each project maintains its own tasks state
- UUID is used for generating unique IDs
- All state updates follow immutable patterns
- Components are functional and use hooks exclusively

---

Built with ❤️ for learning React and modern web development practices.
