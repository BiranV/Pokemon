import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#e20074',
                secondary: '#6c757d',
                accent: '#3ea2fb',
                error: '#dc3545',
                petrol: '#17a499',
                background: '#fff',
            }
        },
        options: {
            customProperties: true
        },
    },
})