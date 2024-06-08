import { create } from 'zustand'

interface ModalState {
	isOpen: boolean
	isSecondModalOpen: boolean
	openModal: () => void
	closeModal: () => void
	openSecondModal: () => void
	closeSecondModal: () => void
	closeFirstOpenSecond: () => void
}

export const useModalStore = create<ModalState>(set => ({
	isOpen: false,
	isSecondModalOpen: false,
	openModal: () => set({ isOpen: true }),
	closeModal: () => set({ isOpen: false }),
	openSecondModal: () => set({ isSecondModalOpen: true }),
	closeSecondModal: () => set({ isSecondModalOpen: false }),
	closeFirstOpenSecond: () => set({ isOpen: false, isSecondModalOpen: true }),
}))
