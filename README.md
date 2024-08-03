## Laravel and React App

Laravel and React App consisting of User Authentication API with bearer tokens.

**Technologies used:**
- Backend: Laravel
- Database: MySQL
- Frontend: ReactJS with TypeScript
- Styling: TailwindCSS

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- PHP (>= 7.3)
- Composer
- Node.js and npm
- Laravel CLI
- Git

## Getting Started

### Backend Setup (Laravel)
1. Clone the Repository
   `git clone https://github.com/ciomofoiur/laravel-react-app.git`
2. Install Composer Dependencies
   `composer install`
3. Generate Application Key
   `php artisan key:generate`
4. Configure Database (Update .env file)
   `DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel_react_crud
    DB_USERNAME=root
    DB_PASSWORD=root`
5. Run Migrations
   `php artisan migrate`
6. Start the Laravel Server
   `php artisan serve`
The backend server will start at http://localhost:8000.

### Frontend Setup (React)
1. Navigate to the Frontend Directory
   `cd react`
2. Install NPM Dependencies
   `npm install`
3. Run the React Development Server
   `npm run dev`
The frontend server will start at http://localhost:5173.

---

> Thank you for your time. Code on!
