import './modal.client.css'

type ModalView = {
    src: string;
    alt?: string;
  };

const modalView: React.FC<ModalView> = ({src,alt}) => {
    console.log(src,alt);
    
    return (
        <div id="overlay">
          <div id="content">
            <p>これがモーダルウィンドウです。</p>
            <p><button>close</button></p>
          </div>
        </div>
      )
}
 
export default modalView;