import {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome,
	Fontisto,
	Foundation,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
	Zocial,
} from './icons';

import React from 'react';
import colors from '../../styles/colors';

const iconsInstance = {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome,
	Fontisto,
	Foundation,
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons,
	Octicons,
	Zocial,
	SimpleLineIcons,
};

function getIconInstance(source: Source) {
	const Icon = iconsInstance[source];
	if (Icon.loadFont) Icon.loadFont();
	return Icon;
}

type Source =
	| 'AntDesign'
	| 'Entypo'
	| 'EvilIcons'
	| 'Feather'
	| 'FontAwesome'
	| 'Fontisto'
	| 'Foundation'
	| 'Ionicons'
	| 'MaterialIcons'
	| 'MaterialCommunityIcons'
	| 'Octicons'
	| 'Zocial'
	| 'SimpleLineIcons';
export interface IconItem {
	source: Source;
	name: string;
	size?: number;
	color?: string;
	solid?: boolean;
}

const Icon: React.FC<IconItem> = ({
	source,
	name,
	size = 20,
	color = colors.purple,
	solid = true,
	...rest
}) => {
	const IconComponent = getIconInstance(source);

	return (
		<IconComponent
			name={name}
			size={size}
			color={color}
			solid={solid}
			{...rest}
		/>
	);
};

export default Icon;
