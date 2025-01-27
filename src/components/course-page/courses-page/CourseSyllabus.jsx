'use client'
import '@styles/course/course-single/CoursePage.css';
import React, { useState } from "react";
import Image from "next/image";
import ExpandMore from '@public/assets/Images/comman/common/chevron_right.svg'

export default function CourseSyllabus(props) {
  const [accordionState, setAccordionState] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(false);

  function toggleAccordion(index) {
    setAccordionState((prevState) => ({
      ...prevState,
      [index]: {
        isOpen: !prevState[index]?.isOpen,
        isRotated: !prevState[index]?.isRotated,
      },
    }));
  }

  function handleViewMore() {
    setShowAll(true);
  }

  function handleViewLess() {
    setShowAll(false);
  }

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const visibleSyllabus = props.syllabus ? (showAll ? props.syllabus : props.syllabus.slice(0, 15)) : [];

  return (
    <main>
      <div className="course-syllabus">
        <div className="course-syllabus-container">
          <div className="course-syllabus-heading">
            <h2>Course Syllabus</h2>
          </div>
          <div className="course-syllabus-accordion-container">
            {visibleSyllabus.map((item, index) => (
              <div
                className="course-syllabus-accordion"
                onClick={() => toggleAccordion(index)}
                key={index} // Added key prop
              >
                <div className="syllabus-accordion-title">
                  <h2>{item.title}</h2>
                  <Image
                    src={ExpandMore}
                    alt="Expand More Icon"
                    className={`waccordion-icon ${accordionState[index]?.isRotated ? "rotated" : ""}`}
                  />

                </div>
                {accordionState[index]?.isOpen && (
                  <div className="syllabus-accordion-contents">
                    <p>{item.contents}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {props.syllabus && props.syllabus.length > 15 && (
            <div className="course-view-container">
              {showAll ? (
                <button
                  onClick={handleViewLess}
                  style={{
                    color: hovered ? "var(--trafy-black)" : "var(--trafy-purple)",
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  View Less
                </button>
              ) : (
                <button
                  onClick={handleViewMore}
                  style={{
                    color: hovered ? "var(--trafy-black)" : "var(--trafy-purple)",
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  View More
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
