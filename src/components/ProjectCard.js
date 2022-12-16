import { Col } from "react-bootstrap";
import githup from '../asserts/icon/github.svg';
import preview from '../asserts/icon/preview.svg';
export const ProjectCard = ({ title, description
    , imgUrl, projectLink, githupLink
}) => {
    return (
        <Col md={12} lg={6}>
            <div className="proj-imgbx">

                <img src={imgUrl} />
                <div className="proj-txtx">
                    <div>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>

                    <div className="project-links">
                        <a href={githupLink}><img src={githup} alt='githup' /></a>
                        <a href={projectLink}> <img src={preview} alt='website' /> </a>
                    </div>
                </div>

            </div>
        </Col>
    )
}