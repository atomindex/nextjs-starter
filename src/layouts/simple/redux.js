import { slices as headerSlices, getState as getHeaderState } from '~/features/header/redux';
import { slices as footerSlices, getState as getFooterState } from '~/features/footer/redux';

export const getState = async () => {
    const header = await getHeaderState();
    const footer = await getFooterState();
    return { 
        ...header,
        ...footer
     };
};

export const slices = {
    ...headerSlices,
    ...footerSlices
};
