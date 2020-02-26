import React from 'react';
import useGlobalHook from '../../index';

import * as actions from '../../actions/global';

const initialState = {
    user: {
        isExisting: true,
        loggedIn: false,
        name_first: 'John',
        name_last: 'Doe',
    },
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
