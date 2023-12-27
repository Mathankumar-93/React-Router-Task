import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function All() {
  return (
    <>
      <div className="container mt">
        <Row xs={1} md={3} className="g-2">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp"
            />
            <Card.Body>
              <Card.Title>
                Best Books to Learn Full-Stack Development
              </Card.Title>
              <Card.Text>
                Are you interested in becoming a full-stack developer but not
                sure where to start? In this blog, we'll introduce you to a list
                of books to learn full-stack development.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-Ways-To-Use-AI-in-UX-Design.webp"
            />
            <Card.Body>
              <Card.Title>Top 7 Ways To Use AI in UX Design</Card.Title>
              <Card.Text>
                The integration of AI in UX design processes has opened up new
                possibilities for creating more efficient, personalized, and
                inclusive user experiences.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Best-AI-Image-Generator-Tools.webp"
            />
            <Card.Body>
              <Card.Title>14 Best AI Image Generator Tools</Card.Title>
              <Card.Text>
                In this blog, we’re going to talk about some of the best AI
                tools out there for making images. We’ll look at 14 different
                ones, each perfect for different kinds of people. Some are great
                for artists, some for people who just want to have fun, and some
                for those who need pictures for work.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Scalable-Vector-Graphics-SVG-for-Responsive-UI-Design.webp"
            />
            <Card.Body>
              <Card.Title>
                Scalable Vector Graphics (SVG) for Responsive UI Design
              </Card.Title>
              <Card.Text>
                Scalable Vector Graphics (SVG) has revolutionized the world of
                graphics and web design. This vector image format, based on
                Extensible Markup Language (XML), offers numerous advantages
                over traditional bitmap images.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Installing-Adobe-XD-on-Mac-A-Comprehensive-Guide.webp"
            />
            <Card.Body>
              <Card.Title>
                Installing Adobe XD on Mac: A Comprehensive Guide
              </Card.Title>
              <Card.Text>
                Adobe XD is a versatile design and prototyping tool that has
                become an essential tool for UI/UX designers worldwide. With its
                intuitive interface and powerful features, it empowers designers
                to create exceptional digital experiences.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-A-Guide-to-Master-UIUX-Design-With-Online-Courses.webp"
            />
            <Card.Body>
              <Card.Title>
                A Guide to Master UI/UX Design With Online Courses
              </Card.Title>
              <Card.Text>
                UI/UX Design is a rapidly evolving field with the changing
                expectations from employers. No matter, if you are a beginner or
                a working professional, learning the fundamentals, staying
                up-to-date, and upskilling are all crucial steps while you are
                seeking a career in UI/UX design. Online courses are a boon that
                helps develop rich skills with flexibility and expert guidance.
                In this guide, we’ll guide you through the process of mastering
                UI/UX design with the help of online courses.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </>
  );
}

export default All;
