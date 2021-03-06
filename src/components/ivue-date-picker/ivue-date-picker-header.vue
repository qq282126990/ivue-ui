<script>
import IvueButton from '../ivue-button/ivue-button';
import IvueIcon from '../ivue-icon/ivue-icon';

import Colorable from '../../utils/mixins/colorable';
import CreateNativeLocaleFormatter from '../../utils/create-native-locale-formatter';
import MonthChange from '../../utils/month-change';

const prefixCls = 'ivue-date-picker-header';

export default {
  name: prefixCls,
  mixins: [Colorable],
  props: {
    /*
    * 日期 时间
    *
    * @type{String}
    */
    value: {
      type: [Number, String],
      required: true
    },
    /*
    * 语言
    *
    * @type{String}
    */
    locale: {
      type: String,
      default: 'en-us'
    },
    nextIcon: {
      type: String,
      default: 'chevron_right'
    },
    prevIcon: {
      type: String,
      default: 'chevron_left'
    },
    /*
    * 最小年份或月份
    *
    * @type{String}
    */
    min: String,
    /*
    * 最大年份或月份
    *
    * @type{String}
    */
    max: String,
    readonly: Boolean,
    /*
     * 当前激活的type
     *
     * @type{String}
     */
    activeType: String,
    format: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      // 是否使用反向动画
      isReversing: false
    }
  },
  computed: {
    formatter () {
      if (this.format) {
        return this.format;
      }
      // 日期
      else if (String(this.value).split('-')[1]) {
        return CreateNativeLocaleFormatter(this.locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }, { length: 7 })
      }
      // 年份
      else {
        return CreateNativeLocaleFormatter(this.locale, { year: 'numeric', timeZone: 'UTC' }, { length: 4 })
      }
    }
  },
  methods: {
    genBtn (change) {
      const disabled = this.readonly ||
        (change < 0 && this.min && this.calculateChange(change) < this.min) ||
        (change > 0 && this.max && this.calculateChange(change) > this.max)


      return this.$createElement(IvueButton, {
        staticClass: 'ivue-button ivue-icon-button',
        props: {
          flat: true,
          icon: true,
        },
        domProps: {
          disabled
        },
        on: {
          click: (e) => {
            this.$emit('input', this.calculateChange(change))
          }
        }
      }, [
          this.$createElement(IvueIcon, change < 0 ? this.prevIcon : this.nextIcon)
        ]);
    },
    // 设置value值
    calculateChange (sign) {
      const [year, month] = String(this.value).split('-').map(v => 1 * v);

      if (!month) {
        return `${year + sign}`;
      }
      else {
        return MonthChange(String(this.value), sign);
      }
    },
    genHeader () {
      const color = !this.disabled && this.color;

      const header = this.$createElement('strong', this.setTextColor(color, {
        key: String(this.value),
        on: {
          click: () => {
            if (!this.disabled) {
              this.$emit('toggle');
            }
          }
        }
      }), [this.$slots.default || this.formatter(String(this.value))]);

      const transition = this.$createElement('transition', {
        props: {
          name: this.isReversing ? `tab-reverse-transition` : `tab-transition`
        }
      }, [header])

      return this.$createElement('div', {
        staticClass: `${prefixCls}--value`,
        class: {
          [`${prefixCls}--disabled`]: this.disabled
        }
      }, [transition])
    }
  },
  watch: {
    value (newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  render () {
    let everyClick;
    if (this.activeType === 'YEAR') {
      everyClick = 10
    }
    else {
      everyClick = 1
    }

    return this.$createElement('div', {
      staticClass: prefixCls
    }, [
        this.genBtn(-everyClick),
        this.genHeader(),
        this.genBtn(everyClick)
      ]);
  }
}
</script>
