# StoryScope signals: the measured data

These tables come from `scripts/rank_features.py` run on StoryScope's
`storyscope_features.parquet`: 304 narrative features, each labeled on 61,575
stories. Each writing prompt has one human story (from published short-story
anthologies) and one story each from GPT-5.4, Claude Sonnet 4.6, Gemini 3 Flash,
DeepSeek V3.2, and Kimi K2.5. Stories run about 5,000 words.

How to read a row: "Score" is how far apart the human and AI distributions are
(0 = identical, 1 = no overlap). "AI over-uses" is the value models pick far
more often than humans, shown as AI share vs human share. "Humans over-use" is
the reverse, shown as human share vs AI share. Numeric values are points on the
feature's scale; higher means more of the thing the feature names (1-5 scales).
Feature definitions and the full list of values are in `taxonomy.json`.

## Human vs all five models (top 30)

| Score | Feature | AI over-uses | Humans over-use |
|---|---|---|---|
| 0.49 | Preferred cues for conveying emotional state (Agents, `AGENT_EMO_012`) | metaphorical or environmental mirroring (weather, setting, or images echoing mood): 87% vs 47% | action choices and behavior (e.g., slamming doors, withdrawing, calling someone): 86% vs 60% |
| 0.48 | Figurative Device Density (Style, `STY_FIG_001`) | 4: 65% vs 18% | 3: 64% vs 33% |
| 0.44 | Density of figurative language in character depiction (Agents, `AGENT_ATTR_024`) | 4: 69% vs 28% | 2: 26% vs 2% |
| 0.43 | Thematic Explicitness and Moralizing (Situatedness, `SIT_MET_303`) | 4: 75% vs 37% | 3: 41% vs 13% |
| 0.43 | Presence of extended conceit (Style, `STY_FIG_004`) | present: 83% vs 40% | absent: 60% vs 17% |
| 0.42 | Dominant mode of emotional expression (Agents, `AGENT_EMO_009`) | embodied_sensations_and_metaphors: 81% vs 39% | behavioral_cues_and_action_only: 33% vs 11% |
| 0.41 | Modes of conveying the central character's emotions (Agents, `AGENT_EMO_002`) | metaphorical or environmental imagery reflecting mood: 89% vs 50% | dialogue content or tone revealing emotion: 69% vs 49% |
| 0.38 | Lexical register and consistency (Style, `STY_ALL_015`) | consistently_elevated_or_literary: 40% vs 11% | mixed_register_with_frequent_code_switching: 56% vs 19% |
| 0.37 | Post-Climax Denouement Length (Plot, `PLT_MOR_007`) | extended (multiple scenes/time jumps of aftermath/epilogue): 51% vs 15% | brief (a short scene or paragraph of aftermath): 72% vs 44% |
| 0.36 | Sound Patterning Prominence (Style, `STY_TON_006`) | noticeable: 91% vs 55% | subtle_or_background: 44% vs 8% |
| 0.34 | Conventional vs fresh figurative language (Style, `STY_FIG_003`) | 3 - predominantly_fresh_and_inventive_images: 65% vs 30% | 2 - mix_of_cliché_and_some_fresh_images: 69% vs 35% |
| 0.33 | Thematic Unity (Plot, `PLT_THM_008`) | 5: 74% vs 41% | 4: 58% vs 26% |
| 0.33 | Rhythmic markedness of prose (Style, `STY_TON_024`) | 4: 61% vs 28% | 3: 59% vs 38% |
| 0.33 | Sentence-structure repertoire (Style, `STY_CPX_012`) | frequent_parallel_or_list-like_structures: 99% vs 70% | frequent_loose_multi-clause_chains: 76% vs 55% |
| 0.33 | Thematic Domains (Plot, `PLT_THM_004`) | nature/environment: 28% vs 22% | love/attachment: 30% vs 25% |
| 0.32 | Allusion domain diversity (Style, `STY_ALL_018`) | self_referential_or_meta-textual: 51% vs 43% | pop_culture_or_brand_names: 40% vs 13% |
| 0.32 | Predominant tonal quality (Style, `STY_TON_021`) | earnest_or_lyrical: 71% vs 40% | ironic_or_wry: 36% vs 13% |
| 0.31 | Range of Relationship Types Present (Social Networks, `SOC_REL_007`) | mentorship_or_teaching: 33% vs 27% | romantic_or_sexual: 48% vs 30% |
| 0.28 | Latinate vs Anglo-Saxon lexical flavor (Style, `STY_ALL_016`) | 3: 65% vs 40% | 2: 53% vs 26% |
| 0.27 | Information density per sentence (Style, `STY_TON_029`) | 4: 62% vs 36% | 3: 62% vs 37% |
| 0.27 | Recurrent metaphorical motif (Style, `STY_FIG_005`) | present: 96% vs 69% | absent: 31% vs 4% |
| 0.26 | Use of irony and humor (Style, `STY_TON_023`) | 1 - entirely_straightfaced_no_discernible_humor: 38% vs 12% | 2 - occasional_light_humor_or_irony: 69% vs 55% |
| 0.25 | Dominant Tonal Register (Style, `STY_TON_001`) | lyrical_or_meditative: 77% vs 51% | neutral_reportorial: 15% vs 2% |
| 0.25 | Narratorial Thematic Commentary Presence (Situatedness, `SIT_MET_501`) | yes: 76% vs 51% | no: 48% vs 24% |
| 0.25 | Primary functions of dialogue (Perspective, `PER_DIA_003`) | philosophical_or_thematic_debate: 59% vs 34% | worldbuilding_or_background_exposition: 50% vs 35% |
| 0.24 | Protagonist Transformational Trajectory (Plot, `PLT_MOR_004`) | positive_growth_or_enlightenment: 68% vs 43% | no_significant_internal_change: 28% vs 11% |
| 0.24 | Perceived Literary Ambition in Prose Style (Situatedness, `SIT_MET_301`) | 4: 74% vs 50% | 3: 37% vs 24% |
| 0.24 | Dominant sources of motivation (Agents, `AGENT_MOT_003`) | ethical or ideological principles: 49% vs 33% | personal desire or ambition: 78% vs 66% |
| 0.24 | Setting as Psychological Mirror (Setting, `SET_ATM_022`) | 5: 25% vs 11% | 3: 29% vs 14% |
| 0.24 | Secondary character density (Agents, `AGENT_ID_002`) | few (2–3): 61% vs 46% | many (8 or more): 21% vs 6% |

## Human vs Claude only (top 20)

Claude's own fingerprint. Use this table when Claude wrote the draft.

| Score | Feature | AI over-uses | Humans over-use |
|---|---|---|---|
| 0.49 | Lexical register and consistency (Style, `STY_ALL_015`) | consistently_neutral_conversational_standard: 60% vs 32% | mixed_register_with_frequent_code_switching: 56% vs 7% |
| 0.49 | Allusion domain diversity (Style, `STY_ALL_018`) | self_referential_or_meta-textual: 60% vs 43% | pop_culture_or_brand_names: 40% vs 9% |
| 0.45 | Post-Climax Denouement Length (Plot, `PLT_MOR_007`) | extended (multiple scenes/time jumps of aftermath/epilogue): 60% vs 15% | brief (a short scene or paragraph of aftermath): 72% vs 37% |
| 0.43 | Preferred cues for conveying emotional state (Agents, `AGENT_EMO_012`) | metaphorical or environmental mirroring (weather, setting, or images echoing mood): 79% vs 47% | action choices and behavior (e.g., slamming doors, withdrawing, calling someone): 86% vs 65% |
| 0.43 | Predominant tonal quality (Style, `STY_TON_021`) | earnest_or_lyrical: 83% vs 40% | ironic_or_wry: 36% vs 10% |
| 0.43 | Thematic Domains (Plot, `PLT_THM_004`) | nature/environment: 27% vs 22% | class/economics: 28% vs 18% |
| 0.41 | Thematic Explicitness and Moralizing (Situatedness, `SIT_MET_303`) | 4: 73% vs 37% | 3: 41% vs 15% |
| 0.39 | Thematic Unity (Plot, `PLT_THM_008`) | 5: 80% vs 41% | 4: 58% vs 20% |
| 0.39 | Predominant Sentence Length Band (Style, `STY_CPX_002`) | medium_21_35_words: 85% vs 46% | short_11_20_words: 50% vs 13% |
| 0.37 | Protagonist Transformational Trajectory (Plot, `PLT_MOR_004`) | positive_growth_or_enlightenment: 80% vs 43% | no_significant_internal_change: 28% vs 10% |
| 0.36 | Dominant trajectories of main character change (Agents, `AGENT_ATTR_021`) | moral_learning_or_increased_empathy: 61% vs 30% | disillusionment_or_loss_of_idealism: 63% vs 41% |
| 0.36 | Concrete vs abstract lexis balance (Style, `STY_FIG_009`) | 3: 51% vs 16% | 4: 84% vs 48% |
| 0.36 | Event Novelty Orientation (Events, `EVT_CAU_017`) | 2: 41% vs 13% | 4: 44% vs 11% |
| 0.36 | Dominant Tonal Register (Style, `STY_TON_001`) | lyrical_or_meditative: 87% vs 51% | neutral_reportorial: 15% vs 4% |
| 0.35 | Typical motivation domains for major characters (Agents, `AGENT_MOT_012`) | ideological_or_moral_commitments: 55% vs 35% | survival_or_physical_safety: 49% vs 33% |
| 0.35 | Presence of extended conceit (Style, `STY_FIG_004`) | present: 75% vs 40% | absent: 60% vs 25% |
| 0.35 | Mode of resolution of the main event chain (Events, `EVT_SCH_004`) | resolved_through_internal_understanding_or_acceptance: 59% vs 27% | catastrophic_or_irrevocably_negative_outcome: 27% vs 6% |
| 0.33 | Moral Polarity Toward Protagonist (Plot, `PLT_MOR_002`) | affirmative_heroic: 62% vs 29% | ambivalent_or_morally_mixed: 58% vs 34% |
| 0.33 | Range of Relationship Types Present (Social Networks, `SOC_REL_007`) | mentorship_or_teaching: 42% vs 27% | adversarial_or_criminal: 56% vs 37% |
| 0.32 | Rhythmic markedness of prose (Style, `STY_TON_024`) | 4: 61% vs 28% | 3: 59% vs 38% |
