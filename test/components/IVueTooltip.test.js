import IvueTooltip from '../../src/components/ivue-tooltip';
import { mount } from '@vue/test-utils';

describe('IvueTooltip', function () {
    it('should render the display arrow', async () => {
        const wrapper = mount({
            template: `
            <IvueTooltip
                color="#303133"
                content="Here is the prompt text"
                arrow
            >A balloon appears when the mouse passes over this text</IvueTooltip>
            `,
            components: {
                IvueTooltip
            }
        });

        expect(wrapper.find('.ivue-tooltip-popper--arrow').element.nodeName).to.be.equal('DIV');
    });

    it('should render the always', async () => {
        const wrapper = mount({
            template: `
            <IvueTooltip
                color="#303133"
                content="Here is the prompt text"
                always
            >A balloon appears when the mouse passes over this text</IvueTooltip>
            `,
            components: {
                IvueTooltip
            }
        });

        expect(wrapper.find('.ivue-tooltip-popper').element.style[0] !== 'display').to.be.equal(true);
    });

});
