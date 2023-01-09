import { Text, Flex } from '@chakra-ui/react';
import * as gtag from '../lib/gtag';

const Tabs = [
  { name: 'All', filter: '*' },
  { name: 'React', filter: 'react' },
  { name: 'Template', filter: 'template' },

];

export default function ProjectsTabs({ onFilter, filterKey }) {
  return (
    <Flex
      as="ul"
      justifyContent="center"
      flexWrap="wrap"
      listStyleType="none"
      py={1}
      mb={3}
      cursor="pointer">
      {Tabs.map((tab) => {
        return (
          <Text
            key={tab.name}
            as="li"
            onClick={() => {
              // Send event to google analytics
              gtag.event({
                action: `Tab( ${tab.name} ) Clicked`,
                category: tab.name,
                label: tab.name
              });

              onFilter(tab.filter);
            }}
            bg={filterKey === tab.filter ? 'secondary' : 'primary'}
            color={filterKey === tab.filter ? 'primary' : 'text'}
            fontSize="sm"
            fontWeight="bold"
            px={2}
            py={1}
            mb={0.6}
            _notLast={{
              mr: 1
            }}
            _hover={{
              opacity: 0.9
            }}>
            {tab.name}
          </Text>
        );
      })}
    </Flex>
  );
}
