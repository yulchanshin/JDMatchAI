"use client"

import { useState, useRef } from "react"
import { Upload, FileText, X, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ResumeUploader({
    onFileSelect
}: {
    onFileSelect: (file: File | null) => void
}) {
    const [file, setFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [texContent, setTexContent] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0]
            processFile(selectedFile)
        }
    }

    const processFile = (selectedFile: File) => {
        setFile(selectedFile)
        onFileSelect(selectedFile)

        // Create preview
        if (selectedFile.type === "application/pdf") {
            const url = URL.createObjectURL(selectedFile)
            setPreviewUrl(url)
            setTexContent(null)
        } else if (selectedFile.name.endsWith(".tex") || selectedFile.name.endsWith(".txt")) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setTexContent(e.target?.result as string)
                setPreviewUrl(null)
            }
            reader.readAsText(selectedFile)
        } else {
            setPreviewUrl(null)
            setTexContent(null)
        }
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processFile(e.dataTransfer.files[0])
        }
    }

    const clearFile = () => {
        setFile(null)
        setPreviewUrl(null)
        setTexContent(null)
        onFileSelect(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    return (
        <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 flex flex-col">
            <CardHeader>
                <CardTitle className="text-xl">Resume Upload</CardTitle>
                <CardDescription>Upload your .pdf or .tex (Jake's Resume) file</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col min-h-0">
                {!file ? (
                    <div
                        className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer h-full"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <div className="p-4 rounded-full bg-primary/10 mb-4">
                            <Upload className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Drag & Drop or Click</h3>
                        <p className="text-sm text-muted-foreground max-w-[200px]">
                            Support for PDF and LaTeX (.tex) files
                        </p>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept=".pdf,.tex,.txt"
                            onChange={handleFileChange}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col h-full space-y-4">
                        <div className="flex items-center justify-between p-3 bg-background/60 rounded-lg border border-border">
                            <div className="flex items-center space-x-3 truncate">
                                <div className="h-10 w-10 rounded bg-primary/20 flex items-center justify-center shrink-0">
                                    <FileText className="h-5 w-5 text-primary" />
                                </div>
                                <div className="truncate">
                                    <p className="font-medium text-sm truncate">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" onClick={clearFile} className="shrink-0">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="flex-1 border rounded-lg overflow-hidden bg-background/50 relative">
                            {previewUrl && (
                                <object
                                    data={previewUrl}
                                    type="application/pdf"
                                    className="w-full h-full"
                                >
                                    <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                                        <Eye className="h-8 w-8 mb-2" />
                                        <p>Preview not available</p>
                                    </div>
                                </object>
                            )}
                            {texContent && (
                                <ScrollArea className="h-full w-full p-4">
                                    <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap">
                                        {texContent}
                                    </pre>
                                </ScrollArea>
                            )}
                            {!previewUrl && !texContent && (
                                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                                    <p>No preview available</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
