import { h, PropType, useSlots } from 'vue';
import { QInput } from 'quasar';
import type { QInputProps } from 'quasar';

export default {
  name: 'TextInput',
  props: {
    settings: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    const slots = useSlots();

    return () =>
      h(
        QInput,
        {
          ...props?.settings,
        },
        {
          ...slots,
        },
      );
  },
};
