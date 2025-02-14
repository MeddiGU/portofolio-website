import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import my_teams from "../../Assets/Projects/my_teams.webp";
import arcade from "../../Assets/Projects/arcade.png";
import my_rpg from "../../Assets/Projects/my_rpg.png";
import rtype from "../../Assets/Projects/rtype.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={my_rpg}
              isBlog={false}
              title="My RPG"
              description="A simple RPG game developped in C using the CSFML library."
              ghLink="https://github.com/MeddiGU/My_RPG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rtype}
              isBlog={false}
              title="R-TYPE"
              description="A multiplayer shoot 'em up game developed in C++ following the ECS (Entity-Component-System) architecture. The game uses a client-server model with network communication handled via UDP, allowing real-time interactions between players."
              ghLink="https://github.com/MeddiGU/RTYPE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arcade}
              isBlog={false}
              title="Arcade"
              description="A simple arcade game developped in C++ using the SFML library. All the games act as shared libs, and can be switched at runtime."
              ghLink="https://github.com/MeddiGU/Arcade"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={my_teams}
              isBlog={false}
              title="My Teams"
              description="A real-time chat server inspired by Slack, developed in C using multi-threading and socket programming. The project follows the client-server architecture, using TCP for communication, allowing users to create channels, send messages, and collaborate efficiently."
              ghLink="https://github.com/MeddiGU/my_teams"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
