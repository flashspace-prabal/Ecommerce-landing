import { useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const HERO_FORM_EVENT = "hero-form-trigger";

export const triggerHeroForm = () => {
  window.dispatchEvent(new CustomEvent(HERO_FORM_EVENT));
};

export const useHeroFormTrigger = () => {
  const [formOpen, setFormOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/lead-form") {
      setTimeout(() => setFormOpen(true), 150);
    } else {
      setFormOpen(false);
    }
  }, [location.pathname]);

  const openForm = useCallback(() => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname !== "/lead-form") {
      navigate("/lead-form", { state: { from: location.pathname } });
    }
  }, [navigate, location.pathname]);

  const closeForm = useCallback(() => {
    if (location.pathname === "/lead-form") {
      if (location.state?.from) {
        navigate(-1);
      } else {
        navigate("/");
      }
    } else {
      setFormOpen(false);
    }
  }, [navigate, location]);

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
