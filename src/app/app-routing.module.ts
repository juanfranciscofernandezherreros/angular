import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HomeSevenComponent } from './components/pages/home-seven/home-seven.component';
import { HomeEightComponent } from './components/pages/home-eight/home-eight.component';
import { HomeNineComponent } from './components/pages/home-nine/home-nine.component';
import { HomeTenComponent } from './components/pages/home-ten/home-ten.component';
import { HomeElevenComponent } from './components/pages/home-eleven/home-eleven.component';
import { HomeTwelveComponent } from './components/pages/home-twelve/home-twelve.component';
import { HomeThirteenComponent } from './components/pages/home-thirteen/home-thirteen.component';
import { HomeFourteenComponent } from './components/pages/home-fourteen/home-fourteen.component';
import { HomeFifteenComponent } from './components/pages/home-fifteen/home-fifteen.component';
import { HomeSixteenComponent } from './components/pages/home-sixteen/home-sixteen.component';
import { HomeSeventeenComponent } from './components/pages/home-seventeen/home-seventeen.component';
import { HomeEighteenComponent } from './components/pages/home-eighteen/home-eighteen.component';
import { HomeNineteenComponent } from './components/pages/home-nineteen/home-nineteen.component';
import { HomeTwentyComponent } from './components/pages/home-twenty/home-twenty.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogDetailsAnswerComponent } from './components/pages/blog-details-answer/blog-details-answer.component';

import { ErrorComponent } from './components/pages/error/error.component';

const routes: Routes = [
    {path: '', component: BlogTwoComponent},
    {path: 'blog-details/:slug', component: BlogDetailsComponent},
    {path: 'blog-details/:slug/answer/:commentId', component: BlogDetailsAnswerComponent},
    {path: 'category/:category', component: BlogTwoComponent},
    {path: 'tag/:tag', component: BlogTwoComponent},
    {path: 'title/:title', component: BlogTwoComponent},
    {path: 'user/:username', component: BlogTwoComponent},
    {path: 'error', component: ErrorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }