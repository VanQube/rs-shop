import { NgModule } from '@angular/core';
import { InfoBlockComponent } from './components/header/info-block/info-block.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from '../shared/components/materials.module';
import { NavBlockComponent } from './components/header/nav-block/nav-block.component';
import { CategoryBlockComponent } from './components/header/category-block/category-block.component';
import { ContactsBlockComponent } from './components/footer/contacts-block/contacts-block.component';
import { SocialBlockComponent } from './components/footer/social-block/social-block.component';
import { CoreService } from './service/core.service';
import { SearchService } from './service/search.service';
import { PrimengModule } from '../shared/components/primeng.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CatalogReducer } from '../redux/reducers/catalog.reducer';
import { CategoryReducer } from '../redux/reducers/category.reducer';
import { UserReducer } from '../redux/reducers/user.reducer';
import { CatalogEffects } from '../redux/effects/catalog.effect';
import { CategoryEffects } from '../redux/effects/category.effect';
import { UserEffects } from '../redux/effects/user.effect';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AccountDropdownComponent } from './components/header/nav-block/account-dropdown/account-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    InfoBlockComponent,
    NavBlockComponent,
    CategoryBlockComponent,
    ContactsBlockComponent,
    SocialBlockComponent,
    AccountDropdownComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    PrimengModule,
    DropdownModule,
    ButtonModule,
    OverlayPanelModule,
    TableModule,
    InputTextModule,
    CheckboxModule,
    PasswordModule,
    RippleModule,
    StoreModule.forFeature('catalog', CatalogReducer),
    StoreModule.forFeature('categoryItems', CategoryReducer),
    StoreModule.forFeature('user', UserReducer),
    EffectsModule.forFeature([CatalogEffects, CategoryEffects, UserEffects]),
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [CoreService, SearchService],
})
export class CoreModule {}
