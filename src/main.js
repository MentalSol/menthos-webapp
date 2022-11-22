import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Add Theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';


// Add PrimeFlex
import 'primeflex/primeflex.css';


//Add ToastService
import ToastService from "primevue/toastservice";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Row from "primevue/row";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Card from "primevue/card";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import PrimeVue from "primevue/config";
import Toolbar from "primevue/toolbar";
import Divider from 'primevue/divider';
import Checkbox from "primevue/checkbox";
import SelectButton from "primevue/selectbutton";
import Menubar from "primevue/menubar";
import Carousel from "primevue/carousel";
import Password from "primevue/password";
import Image from "primevue/image";
createApp(App)

    .use(createPinia())
    .use(router)
    .use(PrimeVue, {ripple: true})
    .use(ToastService)
    .component('pv-data-table', DataTable)
    .component('pv-column',Column)
    .component('pv-toolbar', Toolbar)
    .component('pv-input-text', InputText)
    .component('pv-text-area',Textarea)
    .component('pv-button',Button)
    .component('pv-row',Row)
    .component('pv-sidebar',Sidebar)
    .component('pv-menu', Menu)
    .component('pv-dialog', Dialog)
    .component('pv-toast', Toast)
    .component('pv-card',Card)
    .component('pv-dropdown', Dropdown)
    .component('pv-tag',Tag)
    .component('Divider',Divider)
    .component('Chexbox',Checkbox)
    .component('pv-password',Password)
    .component('pv-select-button',SelectButton)
    .component('pv-menubar',Menubar)
    .component('pv-drop-down',Dropdown)
    .component('pv-carousel',Carousel)
    .component('pv-image',Image)
    .mount('#app')
