import UnityComponentItem from '@site/src/unityComponentItem';

const ewComponents: UnityComponentItem[] = [
  {
    id: "uc:EmoteWizardRoot",
    displayName: "Emote Wizard Root",
    link: "/emotewizard/emote_wizard_root",
  },
  {
    id: "uc:EmoteWizardDataSourceFactory",
    displayName: "Emote Wizard Data Source Factory",
    link: "/emotewizard/emote_wizard_data_source_factory",
  },
  {
    id: "uc:EmoteItemSource",
    displayName: "Emote Item Source",
    link: "/emotewizard/sources/emote_item_source",
  },
  {
    id: "uc:EmoteSequenceSource",
    displayName: "Emote Sequence Source",
    link: "/emotewizard/sources/emote_sequence_source",
  },
  {
    id: "uc:GenericEmoteItemSource",
    displayName: "Generic Emote Item Source",
    link: "/emotewizard/sources/generic_emote_item_source",
  },
  {
    id: "uc:GenericEmoteSequenceSource",
    displayName: "Generic Emote Sequence Source",
    link: "/emotewizard/sources/generic_emote_sequence_source",
  },
  {
    id: "uc:ExpressionItemSource",
    displayName: "Expression Item Source",
    link: "/emotewizard/sources/expression_item_source",
  },
].map((x: any) => {
  x.className = "ucLinkEW";
  return x;
});

export default ewComponents;
