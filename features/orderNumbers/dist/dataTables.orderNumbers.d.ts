/*! © SpryMedia Ltd - datatables.net/license */
import { OrderNumbers } from './types';
declare module 'datatables.net' {
    interface Defaults {
        orderNumbers: true | OrderNumbers;
    }
}
