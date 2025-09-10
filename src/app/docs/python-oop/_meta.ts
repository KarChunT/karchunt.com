import type { MetaRecord } from 'nextra';

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  '*': {
    theme: {
      sidebar: true,
      layout: 'default',
    },
  },
  '#': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Introduction',
  },
  'concepts-of-oop': {
    title: 'Concepts of OOP',
  },
  'cohesion-and-coupling': {
    title: 'Cohesion and Coupling',
  },
  '##': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Core Topics',
  },
  'class-and-object': {
    title: 'Class and Object',
  },
  encapsulation: {
    title: 'Encapsulation',
  },
  inheritance: {
    title: 'Inheritance',
  },
  polymorphism: {
    title: 'Polymorphism',
  },
  abstraction: {
    title: 'Abstraction',
  },
  '###': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Class Diagram',
  },
  'uml-class-diagram': {
    title: 'UML Class Diagram',
  },
};

export default meta;
