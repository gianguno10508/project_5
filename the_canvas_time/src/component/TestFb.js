import { EmbeddedPost, FacebookProvider, Like } from 'react-facebook';
function TestFb(){
    return(
        <FacebookProvider appId="1962804053924433">
            <EmbeddedPost href="https://www.facebook.com/SieuSaoNhatBong/photos/a.102341032480946/158649313516784/" width="500" />
            <p>sdsdsd</p>
        </FacebookProvider>
        
    )
}
export default TestFb;