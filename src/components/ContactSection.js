import React from 'react';

export default class ContactSection extends React.Component {
    render() {
        return (
            <section className="section">
              <div className="container container--md">
                <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="sr-only">
                    <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                    <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                  </div>
                  <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                  <div className="form-group">
                    <label id="name-label" htmlFor="name">Name</label>
                    <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder="Dein Name" required />
                  </div>
                  <div className="form-group">
                    <label id="email-label" htmlFor="email">Email</label>
                    <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Deine Mail Adresse" required />
                  </div>
                  <div className="form-group">
                    <label id="message-label" htmlFor="message">Nachricht</label>
                    <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder="Deine Nachricht" />
                  </div>
                  <div className="form-group form-checkbox">
                    <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" />
                    <label id="consent-label" htmlFor="consent">Ich bin damit einverstanden, dass meine Daten zur Kontaktaufnahme gespeichert und genutzt werden.</label>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="button">abschicken</button>
                  </div>
                </form>
              </div>
            </section>
        );
    }
}
