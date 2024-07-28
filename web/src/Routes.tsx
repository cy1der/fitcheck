// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

// import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import NavBarLayout from './layouts/NavbarLayout/NavbarLayout'
import ScaffoldLayout from './layouts/ScaffoldLayout/ScaffoldLayout'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage'
import SignupPage from './pages/SignupPage/SignupPage'
import HubPage from './pages/HubPage/HubPage'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Headwears" titleTo="headwears" buttonLabel="New Headwear" buttonTo="newHeadwear">
        <Route path="/headwears/new" page={HeadwearNewHeadwearPage} name="newHeadwear" />
        <Route path="/headwears/{id:Int}/edit" page={HeadwearEditHeadwearPage} name="editHeadwear" />
        <Route path="/headwears/{id:Int}" page={HeadwearHeadwearPage} name="headwear" />
        <Route path="/headwears" page={HeadwearHeadwearsPage} name="headwears" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Shirts" titleTo="shirts" buttonLabel="New Shirt" buttonTo="newShirt">
        <Route path="/shirts/new" page={ShirtNewShirtPage} name="newShirt" />
        <Route path="/shirts/{id:Int}/edit" page={ShirtEditShirtPage} name="editShirt" />
        <Route path="/shirts/{id:Int}" page={ShirtShirtPage} name="shirt" />
        <Route path="/shirts" page={ShirtShirtsPage} name="shirts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Pants" titleTo="pants" buttonLabel="New Pant" buttonTo="newPant">
        <Route path="/pants/new" page={PantNewPantPage} name="newPant" />
        <Route path="/pants/{id:Int}/edit" page={PantEditPantPage} name="editPant" />
        <Route path="/pants/{id:Int}" page={PantPantPage} name="pant" />
        <Route path="/pants" page={PantPantsPage} name="pants" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ShoePairs" titleTo="shoePairs" buttonLabel="New Shoes" buttonTo="newShoes">
        <Route path="/shoe-pairs/new" page={ShoesNewShoesPage} name="newShoes" />
        <Route path="/shoe-pairs/{id:Int}/edit" page={ShoesEditShoesPage} name="editShoes" />
        <Route path="/shoe-pairs/{id:Int}" page={ShoesShoesPage} name="shoes" />
        <Route path="/shoe-pairs" page={ShoesShoePairsPage} name="shoePairs" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Fits" titleTo="fits" buttonLabel="New Fit" buttonTo="newFit">
        <Route path="/fits/new" page={FitNewFitPage} name="newFit" />
        <Route path="/fits/{id:Int}/edit" page={FitEditFitPage} name="editFit" />
        <Route path="/fits/{id:Int}" page={FitFitPage} name="fit" />
        <Route path="/fits" page={FitFitsPage} name="fits" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/hub" page={HubPage} name="hub" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={NavBarLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
