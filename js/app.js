/**
 * Logique Applicative & Interactive - Mouhamad Jawad LY
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactModal();
  initArtworkModal();
  initEmailCopy();
  initPrintButton();
  initNavigationScroll();
});

/* --------------------------------------------------------------------------
   1. MODALE DU FORMULAIRE DE CONTACT (CTA CLIENT)
   -------------------------------------------------------------------------- */
function initContactModal() {
  const contactModal = document.getElementById('clientContactModal');
  const openButtons = document.querySelectorAll('.btn-open-contact');
  const closeBtn = document.getElementById('contactModalCloseBtn');
  const contactForm = document.getElementById('clientInquiryForm');
  const btnSendWhatsapp = document.getElementById('btnFormSendWhatsapp');

  if (!contactModal) return;

  function openModal() {
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Envoi direct via WhatsApp
  if (btnSendWhatsapp && contactForm) {
    btnSendWhatsapp.addEventListener('click', () => {
      const name = document.getElementById('inqName').value.trim();
      const org = document.getElementById('inqOrg') ? document.getElementById('inqOrg').value.trim() : '';
      const email = document.getElementById('inqEmail') ? document.getElementById('inqEmail').value.trim() : '';
      const phone = document.getElementById('inqPhone').value.trim();
      const address = document.getElementById('inqAddress') ? document.getElementById('inqAddress').value.trim() : '';
      const budget = document.getElementById('inqBudget') ? document.getElementById('inqBudget').value.trim() : '';
      const subject = document.getElementById('inqSubject').value;
      const message = document.getElementById('inqMessage').value.trim();

      if (!name || !message) {
        showToastNotice('⚠️ Veuillez préciser votre nom et votre message.');
        return;
      }

      const text = encodeURIComponent(
        `*NOUVELLE DEMANDE CLIENT — CV & PORTFOLIO*\n\n` +
        `👤 *Nom :* ${name}${org ? ` (${org})` : ''}\n` +
        `📍 *Adresse / Ville :* ${address || 'Non renseignée'}\n` +
        `💰 *Budget estimé :* ${budget || 'À convenir'}\n` +
        `📞 *Téléphone / WhatsApp :* ${phone || 'Non renseigné'}\n` +
        `✉️ *Email :* ${email || 'Non renseigné'}\n` +
        `🎯 *Objet :* ${subject}\n\n` +
        `📝 *Détails du projet / Message :*\n${message}`
      );

      const waUrl = `https://wa.me/221770000000?text=${text}`;
      window.open(waUrl, '_blank');
      closeModal();
      showToastNotice('Redirection vers WhatsApp avec vos informations...');
    });
  }

  // Soumission standard du formulaire
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<span>Envoi en cours...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        showToastNotice('✅ Votre demande a bien été envoyée à Jawad Ly !');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        closeModal();
      }, 900);
    });
  }
}

/* --------------------------------------------------------------------------
   2. MODALE DE VISUALISATION D'ŒUVRE
   -------------------------------------------------------------------------- */
function initArtworkModal() {
  const artworkModal = document.getElementById('artworkZoomModal');
  const artworkCards = document.querySelectorAll('.artwork-card');
  const modalImg = document.getElementById('zoomModalImg');
  const modalTitle = document.getElementById('zoomModalTitle');
  const modalMedium = document.getElementById('zoomModalMedium');
  const modalDesc = document.getElementById('zoomModalDesc');
  const closeBtn = document.getElementById('zoomModalCloseBtn');

  if (!artworkModal) return;

  function openArtwork(art) {
    modalImg.src = art.image;
    modalImg.alt = art.title;
    modalTitle.textContent = art.title;
    modalMedium.textContent = `${art.category} • ${art.medium}`;
    modalDesc.textContent = art.desc;
    artworkModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeArtwork() {
    artworkModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  artworkCards.forEach((card) => {
    card.addEventListener('click', () => {
      const artId = card.getAttribute('data-art-id');
      const found = cvData.realArtworks.find((a) => a.id === artId);
      if (found) openArtwork(found);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeArtwork);
  artworkModal.addEventListener('click', (e) => {
    if (e.target === artworkModal) closeArtwork();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && artworkModal.classList.contains('active')) {
      closeArtwork();
    }
  });
}

/* --------------------------------------------------------------------------
   3. COPIE DE L'EMAIL & TOAST
   -------------------------------------------------------------------------- */
function showToastNotice(msg) {
  let toast = document.getElementById('siteToastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = msg;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}

function initEmailCopy() {
  const copyButtons = document.querySelectorAll('.btn-copy-email');
  const email = cvData.personal.email;

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        showToastNotice(`Email copié : <strong>${email}</strong>`);
      }).catch(() => {
        showToastNotice(`Email : ${email}`);
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. IMPRESSION / EXPORT PDF
   -------------------------------------------------------------------------- */
function initPrintButton() {
  const printBtns = document.querySelectorAll('.btn-download-pdf');
  printBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });
}

/* --------------------------------------------------------------------------
   5. NAVIGATION FLUIDE & ACTIVE
   -------------------------------------------------------------------------- */
function initNavigationScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach((s) => observer.observe(s));
}
