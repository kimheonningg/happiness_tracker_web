// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Route path="/feedback" page={FeedbackPage} name="feedback" />
      {/* <Route path="/user-info" page={UserInfoPage} name="userInfo" /> */}
      {/* <Route path="/create-account" page={CreateAccountPage} name="createAccount" /> */}
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      {/* <Route path="/login" page={LoginPage} name="login" /> */}
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
