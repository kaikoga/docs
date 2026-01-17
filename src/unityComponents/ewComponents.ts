import UnityComponentItem from '@site/src/unityComponentItem';

const ewComponents: UnityComponentItem[] = [
  {
    id: "ew:EmoteWizardRoot",
    displayName: "Emote Wizard Root",
    link: "/emotewizard/emote_wizard_root",
  },
  {
    id: "ew:EmoteWizardDataSourceFactory",
    displayName: "Emote Wizard Data Source Factory",
    link: "/emotewizard/emote_wizard_data_source_factory",
  },
  {
    id: "ew:EmoteItemSource",
    displayName: "Emote Item Source",
    link: "/emotewizard/sources/emote_item_source",
  },
  {
    id: "ew:EmoteSequenceSource",
    displayName: "Emote Sequence Source",
    link: "/emotewizard/sources/emote_sequence_source",
  },
  {
    id: "ew:GenericEmoteItemSource",
    displayName: "Generic Emote Item Source",
    link: "/emotewizard/sources/generic_emote_item_source",
  },
  {
    id: "ew:GenericEmoteSequenceSource",
    displayName: "Generic Emote Sequence Source",
    link: "/emotewizard/sources/generic_emote_sequence_source",
  },
  {
    id: "ew:ExpressionItemSource",
    displayName: "Expression Item Source",
    link: "/emotewizard/sources/expression_item_source",
  },
].map((x: any) => {
  x.classNames = ["ucLinkEW"];
  return x;
});

export default ewComponents;
