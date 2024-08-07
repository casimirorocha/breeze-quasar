import { h, PropType, useSlots } from 'vue';
import { QInput } from 'quasar';
import type { QInputProps } from 'quasar';

export interface TextInputProps extends QInputProps {
  settings: object;
}

export default {
  name: 'TextInput',
  props: {
    settings: {
      required: true,
      type: Object as PropType<QInputProps>,
    },
  },
  setup(props: TextInputProps) {
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
