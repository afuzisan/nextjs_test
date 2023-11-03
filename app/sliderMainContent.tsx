import Content_2Right from './content_2Right'
import Content_2Left from './Content_2Left'
import Content_1Left from './content_1Left'
import Content_1Right from './content_1Right'


export const revalidate = 10;
const WContent_1_right = () => <Content_1Right />
const WContent_1_left = () => <Content_1Left />
const WContent_2_right = () => <Content_2Right />
const WContent_2_left = () => <Content_2Left />



export { WContent_1_right, WContent_1_left, WContent_2_right, WContent_2_left }