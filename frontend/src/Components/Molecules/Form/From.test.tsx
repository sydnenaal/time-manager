import { render } from "@testing-library/react"
import { unmountComponentAtNode } from "react-dom";
import { Button } from "../../Atoms/Button/Button";
import { Form } from "./Form"

describe('<Form />', () => {
    let container: HTMLDivElement | null = null;

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container);
    })

    afterEach(() => {
        if (container) {
            unmountComponentAtNode(container)
            container.remove()
        }
        container = null
    })

    it('should renders correctly', () => {
        const tree = render(<Form children={<Button children='simple button' />} />)
        expect(tree).toMatchSnapshot();
    })
  
});