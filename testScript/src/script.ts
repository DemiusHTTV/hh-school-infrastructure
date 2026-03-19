const queryElement = <T extends HTMLElement>(selector: string, name: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`По селектору "${selector}" (${name}) элемент не найден.`);
  }
  return element;
};

const popup = queryElement<HTMLDivElement>('.popup__order', 'цифровое окно заказа');
const toggleButton = queryElement<HTMLButtonElement>('.order__group_btn', 'кнопка оформления');
const closeButton = queryElement<HTMLSpanElement>('.popup__close', 'кнопка закрытия');
const backdrop = queryElement<HTMLDivElement>('.popup__backdrop', 'фон попапа');

type ToggleState = boolean;

const togglePopup = (visible: ToggleState) => {
  popup.classList.toggle('show', visible);
  popup.setAttribute('aria-hidden', String(!visible));
  toggleButton.setAttribute('aria-expanded', String(visible));
  if (visible) {
    closeButton.focus({ preventScroll: true });
  }
};

const handleCloseKey = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    togglePopup(false);
  }
};

const handleButton = () => togglePopup(true);
const handleBackdrop = () => togglePopup(false);

toggleButton.addEventListener('click', handleButton);
closeButton.addEventListener('click', handleBackdrop);
closeButton.addEventListener('keydown', handleCloseKey);
backdrop.addEventListener('click', handleBackdrop);

export {};
