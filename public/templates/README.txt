模板文件占位目录
==================

这个目录用来放 8 份模板的实际文件（.docx / .pptx 等）。

下一轮对话中，我会把以下文件放进来：
  research-proposal.docx        研究计划书范本
  screener.docx                 甄别问卷范本
  informed-consent.docx         知情同意书范本
  interview-guide.docx          深度访谈提纲范本
  survey-pack.zip               问卷模板包（NPS/CSAT/SUS/U&A）
  persona-canvas.pptx           用户画像画布
  journey-map.pptx              用户旅程图画布
  report-deck.pptx              研究报告 PPT 模板

文件放进来之后，把 src/data/templates.json 中对应模板的
"placeholder": true 改成 "placeholder": false 即可生效。
