import { useEffect, useCallback, useState } from "react";

const HERO_FORM_EVENT = "hero-form-trigger";

export const triggerHeroForm = () => {
  window.dispatchEvent(new CustomEvent(HERO_FORM_EVENT));
};

export const useHeroFormTrigger = () => {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = useCallback(() => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
    // Small delay to let scroll start, then open
    setTimeout(() => setFormOpen(true), 150);
  }, []);

  const closeForm = useCallback(() => {
    setFormOpen(false);
  }, []);

  useEffect(() => {
    const handler = () => openForm();
    window.addEventListener(HERO_FORM_EVENT, handler);
    return () => window.removeEventListener(HERO_FORM_EVENT, handler);
  }, [openForm]);

  // Escape key closes form
  useEffect(() => {
    if (!formOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeForm();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [formOpen, closeForm]);

  return { formOpen, openForm, closeForm };
};
