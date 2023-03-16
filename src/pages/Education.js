import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
    } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@material-ui/icon/School";

const Education=()=>{
    return(
        <div className="education">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                data="2017-2018"
                iconStyle={{background:"#3e497a",color:"#fff"}}
                >
                <h3 className="vertical-timeline-element-title">
                    Kongunadu matric Hr.Sec.School, Namakkal
                </h3>
                <p>SSLC(2018-2019)</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                data="2017-2018"
                iconStyle={{background:"#3e497a",color:"#fff"}}
                >
                <h3 className="vertical-timeline-element-title">
                    Kongunadu matric Hr.Sec.School, Namakkal
                </h3>
                <p>HSC(2020-2021)</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                data="2017-2018"
                iconStyle={{background:"#3e497a",color:"#fff"}}
                >
                <h3 className="vertical-timeline-element-title">
                    Bannari Amman Institute Of Technology, Sathyamangalam, Erode
                </h3>
                <p>UG(2021-2024)</p>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Education;