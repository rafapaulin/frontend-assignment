import logo       from 'Images/logo-pink.png';
import user       from 'Images/user.png';
import browser    from 'Images/browser.png';
import searchIcon from 'Images/icon-search.png';

import Dropdown from './Dropdown/Dropdown.vue';

export default {
    name: 'top-nav',
    components: {
        Dropdown
    },

    data() {
        return {
            images: {
                logo:       logo,
                user:       user,
                browser:    browser,
                searchIcon: searchIcon,
            }
        };
    }
}
