import React, {
	useRef,
	ReactNode,
	createContext,
	useContext,
	useMemo,
} from 'react';
import { ScrollView } from 'react-native';

interface ScrollContextData {
	scrollViewRef: React.MutableRefObject<ScrollView | undefined>;
	scrollToTop: () => void;
}

const ScrollContext = createContext({} as ScrollContextData);

interface ScrollProviderProps {
	children: ReactNode;
}

const ScrollProvider = ({ children }: ScrollProviderProps) => {
	const scrollViewRef = useRef<ScrollView>();

	const scrollToTop = () => {
		scrollViewRef?.current?.scrollTo({ y: 0, animated: true });
	};
	const defaultContext = useMemo(
		() => ({
			scrollViewRef,
			scrollToTop,
		}),
		[scrollViewRef, scrollToTop],
	);

	return (
		<ScrollContext.Provider value={defaultContext}>
			{children}
		</ScrollContext.Provider>
	);
};

const useScroll = () => useContext(ScrollContext);

export { ScrollProvider, useScroll };
