import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { Card } from 'antd';
import './middle.css';

const { Meta } = Card;

let product = [
  {
    "title": "EduBot",
    "src": "chatbot-min.webp",
    "description": "EduBot, India's own GPT-like AI-based bot, is set to transform the educational landscape. This pioneering initiative aims to revolutionize learning methodologies, fostering an accessible and efficient educational experience for both students and educators."
  }
  ,
  {
    "title": "AI-Umpire",
    "src": "sports-min.webp",
    "description": "Introducing the AI-Umpire, the groundbreaking patented technology empowering on-field umpires in various sports. By merging the precision of AI with human judgment, it revolutionizes the integrity and accuracy of sports officiating, marking a significant advancement in the world of sports."
  }
  ,
  {
    "title": "ML Services",
    "src": "ml-min.webp",
    "description": "Our machine learning consulting approach thrives on collaboration, engaging closely with your team to comprehend your specific challenges and objectives. We prioritize a tailored, hands-on strategy, guaranteeing that our solutions seamlessly integrate with your business requirements."
  }


]

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  id:string;

  t: any;
}

const MiddleBlock = ({ title, content, button,id, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      {/* <Slide direction="up"> */}
      <Row justify="center" align="middle">
        <ContentWrapper>
          <Col lg={24} md={24} sm={24} xs={24}>
            {/* <h6 >{t(title)}</h6> */}
            <h6 id="products">Our <span style={{color:"#ff5a6e"}}> Products</span> and <span style={{color:"#ff5a6e"}}>Services </span></h6>
            <Content></Content>

            {/* <div className="flex-container" > */}
              <div className="middle-block-container" >



              {product.map((item: any, id: number) => {
                return (
                  <Card
                    bordered
                    hoverable
                    style={{
                      maxWidth: "100%",
                      margin: "10px 15px",
                      borderColor: "transparent",
                      boxShadow: "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)"
                    }}
                    cover={<img alt="example" src={`/img/svg/${item.src}`} />}
                  >
                    <Meta title={item.title} description={item.description} />
                  </Card>
                )
              })

              }

            </div>
            {/* </div> */}

          </Col>
        </ContentWrapper>
      </Row>
      {/* </Slide> */}
    </MiddleBlockSection >
  );
};

export default withTranslation()(MiddleBlock);
