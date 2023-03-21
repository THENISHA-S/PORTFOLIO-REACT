import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
    } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {GiGraduateCap} from "react-icons/gi";

const Education=()=>{
    return(
        <div className="education">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                data="2017-2018"
                iconStyle={{background:"#3e497a",color:"#fff"}}
                icon={<GiGraduateCap/>}
                >
                <h3 className="vertical-timeline-element-title">
                    Kongunadu matric Hr.Sec.School, Namakkal
                </h3>
                <p>SSLC(2017-2018)</p>
                <p>Percentage: 89.4</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                data="2019-2020"
                iconStyle={{background:"#3e497a",color:"#fff"}}
                icon={<GiGraduateCap/>}
                >
                <h3 className="vertical-timeline-element-title">
                    Kongunadu matric Hr.Sec.School, Namakkal
                </h3>
                <p>HSC(2019-2020)</p>
                <p>Percentage: 84</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                data="2020-2024"
                iconStyle={{background:"#3e497a",color:"#fff"}}
                icon={<GiGraduateCap/>}
                >
                <h3 className="vertical-timeline-element-title">
                    Bannari Amman Institute Of Technology, Sathyamangalam, Erode
                </h3>
                <p>UG(2020-2024)</p>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Education;