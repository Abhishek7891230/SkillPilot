import "../styles/notesPage.css";
import java from "../notes/react questions.pdf";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function NotesPage() {
  const notes = [
    {
      name: "Java Full notes",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zZKx4f0YmjvOaUf3ZFInOdCBFBEHcR7pQg&s",
      source: java,
    },
    {
      name: "JavaScript Interview questions",
      icon: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
      source: java,
    },
    {
      name: "React.js Interview questions",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      source: java,
    },
    {
      name: "C++ complete notes",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
      source: java,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="notesPage">
        <h1 className="Header-text">Download Notes</h1>

        <div className="notes-grid">
          {notes.map((note, index) => (
            <div key={index} className="notes-card">
              <img className="icon" src={note.icon} alt="icon" />
              <h3 className="note-name">{note.name}</h3>
              <a className="download-btn" href={note.source} download>
                Download
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
