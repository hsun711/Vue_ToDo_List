/* eslint-disable no-param-reassign */
import { jsVars } from 'lib/common/util';
import baseApi from 'lib/api/baseApi';

import todo from './todo';

const main = {
    ...baseApi,

    ...todo,
};

export default main;