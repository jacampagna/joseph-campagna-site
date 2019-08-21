import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.isToggleOn) {
      document.getElementById("mySidebar").style.width = "0px";
      document.getElementById("main").style.marginLeft = "0px";
      document.getElementById("tog").style.left = "5px";
      let pages = document.getElementsByClassName("page");
      for (let i = 0; i < pages.length; i++) {
        pages[i].style.marginLeft = "5px";
      }
    } else {
      document.getElementById("mySidebar").style.width = "300px";
      document.getElementById("main").style.marginLeft = "300px";
      console.log(document.getElementById("main").style.marginLeft);
      let pages = document.getElementsByClassName("page");
      for (let i = 0; i < pages.length; i++) {
        pages[i].style.marginLeft = "300px";
      }
    }

    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button className="toggle" id="tog" onClick={this.handleClick}>
        <div class="bar" />
        <div class="bar1" />
        <div class="bar" />
        <div class="bar1" />
        <div class="bar" />
      </button>
    );
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar open" id="mySidebar">
        <center>
          <img src={require("./images/me.png")} width="60%" alt="me" />
          <br />
          <h1>Joey Campagna</h1>
          <br />
          <div className="email">
            <p>&#9993; jacampagna7@gmail.com </p>
          </div>
          <div>
            <p>
              <a className="side" href="#intro">
                Introduction
              </a>
            </p>
            <p>
              <a className="side" href="#aboutme">
                About Me
              </a>
            </p>
            <p>
              <a className="side" href="#csprojects">
                CS Projects
              </a>
            </p>
            <p>
              <a className="side" href="#bmeprojects">
                BME Projects
              </a>
            </p>
            <p>
              <a className="side" href="#research">
                Research
              </a>
            </p>
          </div>
        </center>
      </div>
    );
  }
}

class MainColumn extends React.Component {
  render() {
    return (
      <div>
        <a id="intro" />
        <div className="mainColumn introduction minimized" id="main">
          <div className="greeting" />
        </div>
      </div>
    );
  }
}

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <center>
          <div className="mainColumn page minimized" id="aboutmePage">
            <h2>
              <a className="pageHeader" id="aboutme">
                Who am I?
              </a>
            </h2>
            <div className="info">
              I recently graduated from the University of Wisconsin, Madison
              with a double major in biomedical engineering and computer
              science. Below you'll find some things I've worked on, including
              some programming projects, engineering projects with the BME
              department, and research projects through my work as an
              undergraduate assistant at{" "}
              <a
                style={{ color: "white" }}
                href="https://carollee.labs.wisc.edu/Lee.html"
              >
                Lee Lab
              </a>
              . I'm very competitive and in my free time I play video games,
              sports (mostly soccer and volleyball), and watch TV and movies.
            </div>
          </div>
        </center>
      </div>
    );
  }
}

class CsProjects extends React.Component {
  render() {
    return (
      <div>
        <center>
          <br />

          <div className="mainColumn page minimized" id="cs">
            <h2>
              <a className="pageHeader" id="csprojects">
                CS Projects
              </a>
            </h2>
            <div className="info">
              <div id="compText">
                <h3>
                  <a className="projectHeader">C Compiler</a>
                </h3>
                <p>
                  Over the course of a semester, I developed a compiler for a
                  subset of the C programming language using tools like JLex,
                  Java CUP, and SPIM. This compiler took a source program and
                  constructed a symbol table. Then used this symbol table to
                  complete lexical and syntactic analysis, code optimization,
                  and finally, executable machine code generation.
                </p>
              </div>
              <div className="limitWidth" id="comp">
                <center>
                  <img
                    src={require("./images/compilers.PNG")}
                    width="98%"
                    alt="compilers"
                  />
                  <br />
                </center>
              </div>
            </div>
            <div className="info">
              <center />
              <br />
              <h3>
                <a className="projectHeader">Bioinformatics Suite</a>
              </h3>
              <p>
                In Python, I developed a wide range of bioinformatics tools to
                analyze genetic sequences in order to better understand the
                technology I was employing in my own research. I built basic
                programs for sequence alignment using Needleman-Wunsch &
                Smith-Waterman algorithms. Sequence alignment is often one of
                the first steps in analyzing genetic data, as the output will
                let you compare analagous regions from different sequences.
                Next, I developed simple phylogenetic tree building software
                using distance, maximum likelihood, and parsimony to reason
                about how closely related a group of sequences are. The last
                part of this software suite was a genome annotation algorithm
                that used hidden markov models to predict gene boundaries.
              </p>
              <div className="fullWidth">
                <img
                  className="pair"
                  src={require("./images/align.gif")}
                  width="57%"
                  alt="me"
                />
                <img
                  className="pair"
                  src={require("./images/tree.png")}
                  width="38.65%"
                  alt="me"
                />
                <br />
                Example of a multiple sequence alignment (left) and phylogenetic
                tree (right)
                <br />
                <br />
              </div>
              <div className="fullWidth">
                <img src={require("./images/hmm.png")} alt="me" />
                <br />A hidden markov model used for gene prediction
              </div>
              <h3>
                <a
                  className="projectHeader"
                  href="https://en.wikipedia.org/wiki/MapReduce"
                >
                  MapReduce
                </a>
              </h3>
              Built a simplified version of Google’s large-scale parallel data
              processing paradigm MapReduce. This provides a simple framework
              for programming tasks on large-scale clusters by handling
              parallelism, machine crashes, and other complexities common within
              clusters of machines. The developer can focus instead on writing
              small bits of code while the infrastructure handles the rest.
              <br />
              <br />
              <img
                className="limitWidth"
                src={require("./images/mapreduce.jpg")}
                alt="me"
              />
              <br />
              <br />
              <h3>
                <a className="projectHeader">Unix Shell</a>
              </h3>
              Implemented a unix shell which creates a child process that
              executes each command and then prompts the user for more input
              when it has finished. The shell supported using absolute or
              relative paths to find binaries, piping (using output of one
              command as input for another), and the redirection of output to a
              file.
              <br />
              <br />
              <img
                className="limitWidth"
                src={require("./images/wish-shell.PNG")}
                alt="me"
              />
              <br />
              Some example output of the shell
            </div>
          </div>
        </center>
      </div>
    );
  }
}

class Bme extends React.Component {
  render() {
    return (
      <div>
        <center>
          <br />

          <div className="mainColumn page minimized" id="bme">
            <h2>
              <a className="pageHeader" id="bmeprojects">
                Engineering Projects
              </a>
            </h2>
            <div className="info">
              <h3>
                <a className="projectHeader">
                  VR Simulation of Neonatal Intubation
                </a>
              </h3>
              <br />
              Clients: Drs. &nbsp;
              <a
                style={{ color: "white" }}
                href="https://www.uwhealth.org/findadoctor/profile/ryan-m-mcadams-md/10420"
              >
                Ryan Mcadams
              </a>
              &nbsp; and Brandon Tomlin
              <br />
              <p>
                I worked with a team of 5 students to create a better way to
                train doctors on performing intubation on neonates (newborns).
                We created a virtual reality simulation of a neonatal intubation
                procedure that incorporated haptic feedback. We used CT data to
                reconstruct the internal anatomy of a neonate's airway (the
                internal anatomy can be seen in the video below) and combined
                that with a hollow shell of a neonate. This model was then
                placed into a Unity scene. A haptic feedback device was used to
                manipulate a model of a laryngoscope in the simulation and
                provide physical feedback to the user's hand when a collision
                occured in the virtual space. We also built a model of a giraffe
                intubation carestation (where this procedure would take place)
                and provided some sound bytes that make the environment more
                realistic.
                <br />
                <br />
                <img
                  className="pair"
                  src={require("./images/intubation-overview.png")}
                  width="38%"
                  alt="me"
                />
                <img
                  className="pair"
                  src={require("./images/unity-scene.png")}
                  width="58%"
                  alt="me"
                />
                <video className="fullWidth" controls preload="none">
                  <source
                    src={require("./videos/internal_neonate_vid.mp4")}
                    type="video/mp4"
                  />
                </video>
                <br />
                <br />
              </p>
              <h3>
                <a className="projectHeader">
                  Implantable Light for Optogenetics Research
                </a>
              </h3>
              Client:&nbsp;
              <a
                style={{ color: "white" }}
                href="https://www.anesthesia.wisc.edu/index.php?title=Yang_Laboratory"
              >
                Dr. Jay Yang
              </a>
              <p>
                I worked with a team of 5 students to design a wirelessly
                controlled implantable light source to deliver stimuli to
                channelrhodopsin in the sciatic nerve of experimental rats via a
                fiber optic cable. This device involved a laser controlled by
                bluetooth and encased in a steralizable housing, which was
                coupled via a lens into a fiber optic cable which would transmit
                the light to the sciatic nerve. The device had to be small
                enough to be implanted into a rat where it could be used in
                research for the treatment of chronic pain.
              </p>
              <img
                className="pair"
                src={require("./images/rat.PNG")}
                width="45%"
                alt="me"
              />
              <img
                className="pair"
                src={require("./images/device.PNG")}
                width="45%"
                alt="me"
              />
              <br />
            </div>
          </div>
        </center>
      </div>
    );
  }
}

class Research extends React.Component {
  render() {
    return (
      <div>
        <center>
          <br />

          <div className="mainColumn page minimized" id="res">
            <h2>
              <a className="pageHeader" id="research">
                Research
              </a>
            </h2>
            <div className="info">
              <h3>
                {" "}
                <a className="projectHeader">
                  Molecular Evolution of Bicarbonate Ion Transporters
                </a>
              </h3>
              I studied the molecular evolution of bicarbonate ion transporters
              (AE and NBC gene families) across arthropods. To do this, I first
              searched for copies of these genes in arthropod species by
              comparing them to a known gene bicarbonate ion transporters in
              drosophila melanogaster. This is known as gene mining. This was
              accomplished by using gene browsing software, like &nbsp;
              <a href="https://jbrowse.org/" style={{ color: "white" }}>
                jbrowse
              </a>
              , and &nbsp;
              <a
                href="https://blast.ncbi.nlm.nih.gov/Blast.cgi"
                style={{ color: "white" }}
              >
                BLAST
              </a>
              , which is a tool used to search for and compare similar
              biologoical sequences. After these genes were mined, they were
              aligned using&nbsp;
              <a href="http://tcoffee.crg.cat/" style={{ color: "white" }}>
                tcoffee
              </a>
              &nbsp; in order to learn more about the relationships between
              these genes and eventually create phylogenetic trees. Below is an
              example of a phylogenetic tree which gives some information into
              the evolutionary history of these genes. Eventually, the goal of
              the project was to use tools like those available through&nbsp;
              <a href="http://tcoffee.crg.cat/" style={{ color: "white" }}>
                datamonkey
              </a>
              &nbsp; to learn about which parts of these genes are undergoing
              natural selection and build and understanding of how they might
              continue to evolve in the future. Unfortunately, so little is
              known about the structure and function of these genes that the
              project had to be put on hold until some more research became
              available.
              <br />
              <br />
              <img
                className="pair"
                src={require("./images/AE-and-NBC.jpg")}
                width="37%"
                alt="me"
              />
              <img
                className="pair"
                src={require("./images/nbc-tree.png")}
                width="58.9%"
                alt="me"
              />
              <h3>
                <a className="projectHeader">
                  Baltic Copepod Fecundity Experiment
                </a>
              </h3>
              I worked with another undergraduate researcher to test the effects
              of sterols and dinoflagettes as dietary suppliments for the
              copepod eurytemora affinis. These copepods are used all around the
              world as food for fisheries and the ability to culture them as
              efficiently as possible is of paramount importance to
              aquaculturists. The graphs below show a little bit of our results.
              Fucosterol significantly increased hatching rate and the
              dinoflagellate Lingulodinium polyedrum increased the egg number of
              the copepods. None of the other results were significant. I'm
              currently working with my research partner to finish the paper on
              this project and get the work published.
              <br />
              <br />
              <img
                src={require("./images/fecundity_graphs.png")}
                width="80%"
                alt="me"
              />
              <br />
              <br />
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export { Toggle, Sidebar, MainColumn, AboutMe, CsProjects, Bme, Research };
ReactDOM.render(<Toggle />, document.getElementById("root"));
