import { createStyles } from '@mantine/core';
import { colors } from '../config';
export default createStyles((theme) => {
    return {
        modal: {
            backgroundColor: theme.colorScheme === 'dark' ? colors.B15 : colors.white,
        },
        body: {
            paddingTop: '5px',
        },
        inner: {
            paddingTop: '180px',
        },
    };
});
//# sourceMappingURL=Modal.styles.js.map