"use client";

import { Box } from "@chakra-ui/react";
import Menu from "../menu/page";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const History = () => {
  return (
    <Box height="90dvh" width="100dvw" overflowX="hidden" padding="30px 30px 30px 15px" margin="0 !important" overflow="auto" marginLeft='5' marginRight='5'>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="20-09-2023 09:32 a.m"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Access to data accepted</h3>
          <p>
            Data shared with doctor Cristian
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="05/09/2023 09:30 a.m"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Access to data accepted</h3>
          <p>
            Data shared with doctor Tabilox
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="15/08/2023 02:31 p.m"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Access to data accepted</h3>
          <p>
            Data shared with doctor Cristian
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="30/07/2023 10:03 a.m"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Access to data accepted</h3>
          <p>
            Data shared with doctor Amanda
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="11/07/2023 04:32 p.m"
          iconStyle={{ background: "rgb(299, 62, 62)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Access to data denied</h3>
          <p>
            Data NOT shared with doctor Nicol
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default History;
